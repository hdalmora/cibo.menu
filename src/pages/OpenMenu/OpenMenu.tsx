import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import BottomSheetDialog from '../../components/BottomSheetDialog';
import Menu from '../../components/Menu';
import supabase from '../../../supabaseClient';
import * as S from './styles';
import { MenuTemplate } from '../../models/menu-template';

const OpenMenu: React.FC = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState<MenuTemplate[]>();

  const handleGetMenuTemplate = async () => {
    setLoading(true);

    let { data, error } = await supabase
      .from('menu-template')
      .select('uuid, name,description,sections')
      .eq('uuid', id);

    if (data && !error) {
      setTemplate(data);
    } else {
      toast.error('Oops, An error occured fetching your menus 🦄');
    }

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      handleGetMenuTemplate();
    }
  }, []);

  return (
    <S.Container>
      <BottomSheetDialog open={true}>
        <Menu menu={template ? template[0] : undefined} />
      </BottomSheetDialog>
    </S.Container>
  );
};

export default OpenMenu;
