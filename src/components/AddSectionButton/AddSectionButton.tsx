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
        Adicionar seção
      </button>
    </S.Container>
  );
};

export default AddSectionButton;
