import * as S from './styles';
import FormItemArea from '../FormItemArea';
import CustomInput from '../CustomInput';
import FieldArea from '../FieldArea';
import Paper from '../Paper';
import { MdDeleteSweep } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

interface MenuSectionContainerProps {
  items: { id: string; foodName: string | null; foodPrice: number | null }[];
  removeMenuItem: (sectionIndex: number, id: string) => void;
  removeSection: (sectionIndex: number) => void;
  updateSectionTitle: (sectionIndex: number, foodName: string) => void;
  updateTitle: (sectionIndex: number, id: string, foodName: string) => void;
  updatePrice: (sectionIndex: number, id: string, foodPrice: number) => void;
  addMenuItem: (
    sectionIndex: number,
    menuItem: { foodName: string | null; foodPrice: number | null }
  ) => void;
  sectionIndex: number;
  sectionName: string;
}

const MenuSectionContainer: React.FC<MenuSectionContainerProps> = ({
  items,
  removeMenuItem,
  removeSection,
  updateSectionTitle,
  updateTitle,
  updatePrice,
  addMenuItem,
  sectionIndex,
  sectionName,
}: MenuSectionContainerProps) => {
  const handleAddMenuItem = () => {
    addMenuItem(sectionIndex, { foodName: null, foodPrice: null });
  };

  const handleRemoveMenuItem = (id: string) => {
    removeMenuItem(sectionIndex, id);
  };

  const handleRemoveSection = () => {
    removeSection(sectionIndex);
  };

  return (
    <Paper marginTop>
      <ReactTooltip />

      <S.Container>
        <MdDeleteSweep
          data-tip='Delete section'
          className='delete-section-btn'
          onClick={handleRemoveSection}
        />

        <div className='section-name'>
          <FieldArea>
            <CustomInput
              name={`sections[${sectionIndex}].menuSectionName`}
              placeholder='Menu section name'
              type='text'
              value={sectionName}
              onChangeValue={(value: any) => {
                updateSectionTitle(sectionIndex, value);
              }}
              main
            />
          </FieldArea>
        </div>

        <FormItemArea
          sectionIndex={sectionIndex}
          items={items}
          updateTitle={updateTitle}
          updatePrice={updatePrice}
          onRemoveClicked={handleRemoveMenuItem}
        />

        <button
          type='button'
          className='add-menu-item-btn'
          onClick={handleAddMenuItem}
        >
          Add menu item
        </button>
      </S.Container>
    </Paper>
  );
};

export default MenuSectionContainer;
