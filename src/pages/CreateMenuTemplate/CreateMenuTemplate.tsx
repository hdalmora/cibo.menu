import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
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

interface CreateMenuTemplateProps {
  userSession: Session | null;
}

const CreateMenuTemplate: React.FC<CreateMenuTemplateProps> = ({
  userSession,
}: CreateMenuTemplateProps) => {
  const formRef = useRef<FormHandles>(null);

  let navigate = useNavigate();

  const {
    menu,
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
    const { data, error } = await supabase.from('menu-template').insert([
      {
        name: menu.name,
        description: menu.description,
        sections: menu.sections,
        user_id: userSession?.user?.id,
      },
    ]);

    return { data, error };
  };

  const handleSubmit: SubmitHandler<MenuSection> = async (formData) => {
    if (!formRef.current) return;

    formRef.current.setErrors({});

    try {
      await validateMenuTemplate(formData);

      const { data, error } = await handleCreateMenuTemplate();

      if (data && !error) {
        toast.success('Succes! Enjoy your menu 🦄', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/');
        clearMenuData();
      } else {
        toast.error('Oops, an error occured 🦄', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err: any) {
      const validationErrors: any = {};

      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      formRef.current.setErrors(validationErrors);

      toast.warn('A validation error appeared! 🦄', {
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

  return (
    <S.Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <CustomButton
          text='Save menu'
          disabled={false}
          isLoading={false}
          variation='primary'
          width={120}
        />

        <Paper>
          <div className='menu-infos'>
            <FieldArea>
              <CustomInput
                name='name'
                placeholder='Menu name'
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
                placeholder='Menu description'
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
          <p className='empty-form-text'>Start adding sections to your menu.</p>
        )}
        <AddSectionButton onClickCallback={addMenuSection} />
      </Form>
    </S.Container>
  );
};

export default CreateMenuTemplate;
