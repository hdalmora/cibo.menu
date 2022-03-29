import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import CustomButton from '../../components/CustomButton';
import CardItem from '../../components/CardItem';
import supabase from '../../../supabaseClient';
import { MenuTemplate } from '../../models/menu-template';
interface HomeProps {
  userSession: Session | null;
}

const Home: React.FC<HomeProps> = ({ userSession }: HomeProps) => {
  const [templates, setTemplates] = useState<MenuTemplate[]>([]);

  const handleGetTemplates = async () => {
    let { data, error } = await supabase
      .from('menu-template')
      .select('id, name,description,sections')
      .eq('user_id', userSession?.user?.id);

    if (data && !error) {
      setTemplates(data);
    } else {
      toast.error('Oops, An error occured fetching your menus 🦄', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    handleGetTemplates();
  }, []);

  return (
    <S.Container>
      <div className='main-title'>
        <p>
          <strong>My awesome menus</strong>
        </p>

        <NavLink to={'/create-menu-template'}>
          <CustomButton
            disabled={false}
            isLoading={false}
            width={160}
            variation='primary'
            text='Create new menu'
          />
        </NavLink>
      </div>

      {templates.map((template: MenuTemplate) => (
        <CardItem
          key={template.id}
          title={template.name}
          description={template.description}
          onDelete={async () => {
            console.log('delete template', template);
            const { data, error } = await supabase
              .from('menu-template')
              .delete()
              .eq('id', template.id);
            console.log(data);
            console.log(error);

            if (data && !error) {
              toast.success('Menu deleted successfuly 🦄', {
                position: 'bottom-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              const undeletedTemplates = templates.filter(
                (el) => el.id !== template.id
              );

              setTemplates([...undeletedTemplates]);
            } else {
              toast.error('Oops, An error occured deleting your menu 🦄', {
                position: 'bottom-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }}
        />
      ))}

      {templates.length <= 0 && (
        <p className='empty-templates-list-txt'>
          Start by creating some amazing menus here!
        </p>
      )}
    </S.Container>
  );
};

export default Home;
