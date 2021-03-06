import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Session, PostgrestError } from '@supabase/supabase-js';
import { useNavigate, NavLink } from 'react-router-dom';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import AddSectionButton from '../../components/AddSectionButton';
import MenuSectionContainer from '../../components/MenuSectionContainer';
import { useStore } from '../../stores/menu-template-crud';
import Paper from '../../components/Paper';
import FieldArea from '../../components/FieldArea';
import CustomInput from '../../components/CustomInput';
import { MenuSection } from '../../models/menu-template';
import { validateMenuTemplate } from '../../validations';
import * as S from './styles';
import CustomButton from '../../components/CustomButton';
import supabase from '../../../supabaseClient';
import BottomSheetDialog from '../../components/BottomSheetDialog';
import Menu from '../../components/Menu';

interface CreateMenuTemplateProps {
  userSession: Session | null;
}

const CreateMenuTemplate: React.FC<CreateMenuTemplateProps> = ({
  userSession,
}: CreateMenuTemplateProps) => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  let navigate = useNavigate();

  const {
    menu,
    isEditing,
    addMenuSection,
    addMenuItem,
    updateSectionTitle,
    updateTitle,
    updatePrice,
    updateMenuName,
    updateMenuDescription,
    removeMenuItem,
    removeSection,
    clearMenuData,
  } = useStore();

  const handleCreateMenuTemplate = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('menu-template').insert([
      {
        name: menu.name,
        description: menu.description,
        sections: menu.sections,
        user_id: userSession?.user?.id,
      },
    ]);

    setLoading(false);

    return { data, error };
  };

  const handleUpdateMenuTemplate = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('menu-template')
      .update({
        name: menu.name,
        description: menu.description,
        sections: menu.sections,
      })
      .eq('id', menu.id)
      .eq('user_id', userSession?.user?.id);

    setLoading(false);

    return { data, error };
  };

  const handleFeedbackMessage = (
    data: any[] | null,
    error: PostgrestError | null,
    successMessage: string,
    errorMessage: string
  ) => {
    if (data && !error) {
      toast.success(successMessage);
      navigate('/');
      clearMenuData();
    } else {
      toast.error(errorMessage);
    }
  };

  const handleSubmit: SubmitHandler<MenuSection> = async (formData) => {
    if (loading || !formRef.current) return;

    formRef.current.setErrors({});

    try {
      await validateMenuTemplate(formData);

      if (isEditing) {
        const { data, error } = await handleUpdateMenuTemplate();

        handleFeedbackMessage(
          data,
          error,
          'Sucesso! Card??pio atualizado ????',
          'Oops, ocorreu um erro ????'
        );
      } else {
        const { data, error } = await handleCreateMenuTemplate();

        handleFeedbackMessage(
          data,
          error,
          'Sucesso! Aproveite seu card??pio ????',
          'Oops, ocorreu um erro ????'
        );
      }
    } catch (err: any) {
      const validationErrors: any = {};

      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      formRef.current.setErrors(validationErrors);

      toast.warn('Opa, temos um erro de valida????o! ????');
    }
  };

  return (
    <S.Container>
      <BottomSheetDialog
        open={openPreview}
        onClose={() => {
          setOpenPreview(false);
        }}
      >
        <Menu menu={menu} />
      </BottomSheetDialog>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className='menu-action-container'>
          <NavLink to={'/'}>
            <div>
              <AiOutlineArrowLeft />
            </div>
          </NavLink>

          <p className='menu-action-txt'>
            {isEditing ? 'Editando Card??pio' : 'Criando Card??pio'}
          </p>

          <button
            data-tip='Veja como seus clientes ir??o ver seu card??pio'
            className='preview-btn'
            type='button'
            onClick={() => {
              setOpenPreview(true);
            }}
          >
            Preview
          </button>
        </div>

        <CustomButton
          text='Save menu'
          disabled={false}
          isLoading={loading}
          variation='primary'
          width={120}
        />

        <Paper>
          <div className='menu-infos'>
            <FieldArea>
              <CustomInput
                name='name'
                placeholder='Nome do card??pio'
                type='text'
                value={menu.name}
                onChangeValue={(value: any) => {
                  updateMenuName(value);
                }}
                main
              />
            </FieldArea>

            <FieldArea>
              <CustomInput
                name='description'
                placeholder='Descri????o'
                type='text'
                value={menu.description}
                onChangeValue={(value: any) => {
                  updateMenuDescription(value);
                }}
              />
            </FieldArea>
          </div>
        </Paper>

        {menu.sections.map((section, index) => (
          <MenuSectionContainer
            key={section.id}
            sectionName={section.menuSectionName}
            items={section.items}
            addMenuItem={addMenuItem}
            updateSectionTitle={updateSectionTitle}
            updateTitle={updateTitle}
            updatePrice={updatePrice}
            removeMenuItem={removeMenuItem}
            removeSection={removeSection}
            sectionIndex={index}
          />
        ))}

        {menu.sections.length <= 0 && (
          <p className='empty-form-text'>
            Comece adicionando se????es para o seu card??pio.
          </p>
        )}
        <AddSectionButton onClickCallback={addMenuSection} />
      </Form>
      <ReactTooltip />
    </S.Container>
  );
};

export default CreateMenuTemplate;
