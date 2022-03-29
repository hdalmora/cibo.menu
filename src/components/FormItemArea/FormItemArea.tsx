import FieldArea from '../FieldArea';
import CustomInput from '../CustomInput';
import * as S from './styles';

interface FormItemAreaProps {
  items: { id: string; foodName: string | null; foodPrice: number | null }[];
  onRemoveClicked: (id: string) => void;
  updateTitle: (sectionIndex: number, id: string, foodName: string) => void;
  updatePrice: (sectionIndex: number, id: string, foodPrice: number) => void;
  sectionIndex: number;
}

const FormItemArea: React.FC<FormItemAreaProps> = ({
  items,
  onRemoveClicked,
  updateTitle,
  updatePrice,
  sectionIndex,
}: FormItemAreaProps) => {
  return (
    <S.Container>
      {items.length > 0 &&
        items.map((item, index) => (
          <FieldArea key={item.id}>
            <>
              <CustomInput
                name={`sections[${sectionIndex}].items[${index}].foodName`}
                placeholder='Menu item title'
                type='text'
                value={item.foodName}
                onChangeValue={(value: any) => {
                  updateTitle(sectionIndex, item.id, value);
                }}
              />

              <CustomInput
                name={`sections[${sectionIndex}].items[${index}].foodPrice`}
                placeholder='Price'
                type='number'
                value={item.foodPrice}
                onChangeValue={(value: any) => {
                  updatePrice(sectionIndex, item.id, value);
                }}
              />

              <button
                className='add-menu-item-btn delete'
                type='button'
                onClick={() => {
                  onRemoveClicked(item.id);
                }}
              >
                Remove
              </button>
            </>
          </FieldArea>
        ))}

      {!items ||
        (items.length <= 0 && (
          <p>Add at least one menu item to this section</p>
        ))}
    </S.Container>
  );
};

export default FormItemArea;
