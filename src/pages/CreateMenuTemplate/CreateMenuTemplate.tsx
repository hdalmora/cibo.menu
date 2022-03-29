import { useRef } from 'react';
import { toast } from 'react-toastify';
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

const CreateMenuTemplate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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
  } = useStore();

  const handleSubmit: SubmitHandler<MenuSection> = async (data) => {
    if (!formRef.current) return;

    formRef.current.setErrors({});

    try {
      await validateMenuTemplate(data);

      toast.success('Succes! Enjoy your menu 🦄', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
