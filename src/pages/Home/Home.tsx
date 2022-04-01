import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { toast } from 'react-toastify';
import * as S from './styles';
import CustomButton from '../../components/CustomButton';
import CardItem from '../../components/CardItem';
import supabase from '../../../supabaseClient';
import { useStore } from '../../stores/menu-template-crud';
import { MenuTemplate } from '../../models/menu-template';
import CircularLoading from '../../components/CircularLoading';
interface HomeProps {
  userSession: Session | null;
}

const Home: React.FC<HomeProps> = ({ userSession }: HomeProps) => {
  const [templates, setTemplates] = useState<MenuTemplate[]>([]);
  const [loading, setLoading] = useState(false);

  const { setMenuTemplate, clearMenuData } = useStore();

  let navigate = useNavigate();

  const handleGetTemplates = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from('menu-template')
      .select('id,uuid,name,description,sections')
      .eq('user_id', userSession?.user?.id);

    if (data && !error) {
      setTemplates(data);
    } else {
      toast.error('Oops, erro ao buscar seus cardápios 😖');
    }

    setLoading(false);
  };

  const handleDeleteTemplate = async (template: MenuTemplate) => {
    const { data, error } = await supabase
      .from('menu-template')
      .delete()
      .eq('id', template.id);

    if (data && !error) {
      toast.success('Cardápio deletado com sucesso 💪');

      const undeletedTemplates = templates.filter(
        (el) => el.id !== template.id
      );

      setTemplates([...undeletedTemplates]);
    } else {
      toast.error('Oops, erro ao deletar seu cardápio 🙀');
    }
  };

  const handleEditTemplate = async (template: MenuTemplate) => {
    setMenuTemplate(template);
    navigate('/create-menu-template');
  };

  useEffect(() => {
    handleGetTemplates();
  }, []);

  return (
    <S.Container>
      <div className='main-title'>
        <p>
          <strong>Meus cardápios incríveis</strong>
        </p>

        <NavLink to={'/create-menu-template'}>
          <CustomButton
            disabled={false}
            isLoading={false}
            width={160}
            variation='primary'
            text='Criar novo cardápio'
            handleButtonClick={clearMenuData}
          />
        </NavLink>
      </div>

      {loading && (
        <div className='home-loading'>
          <CircularLoading /> <p>Loading...</p>
        </div>
      )}

      {templates.map((template: MenuTemplate) => (
        <CardItem
          key={template.id}
          title={template.name}
          description={template.description}
          templateUUID={template.uuid}
          onDelete={() => handleDeleteTemplate(template)}
          onEdit={() => handleEditTemplate(template)}
        />
      ))}

      {templates.length <= 0 && !loading && (
        <NavLink to={'/create-menu-template'}>
          <p onClick={clearMenuData} className='empty-templates-list-txt'>
            Start by creating some amazing menus here <AiOutlineArrowRight />
          </p>
        </NavLink>
      )}
    </S.Container>
  );
};

export default Home;
