import * as S from './styles';

interface AddSectionButtonProps {
  onClickCallback: () => void;
}

const AddSectionButton: React.FC<AddSectionButtonProps> = ({
  onClickCallback,
}: AddSectionButtonProps) => {
  return (
    <S.Container>
      <button type='button' onClick={onClickCallback}>
        Add menu section
      </button>
    </S.Container>
  );
};

export default AddSectionButton;
