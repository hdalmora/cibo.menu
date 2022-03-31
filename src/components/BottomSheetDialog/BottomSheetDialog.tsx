import * as S from './styles';

interface BottomSheetDialogProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const BottomSheetDialog: React.FC<BottomSheetDialogProps> = ({
  open,
  children,
  onClose,
}: BottomSheetDialogProps) => {
  return (
    <S.Container open={open} onClose={onClose}>
      <S.Content>
        <div id='modal-content'>
          <div>{children}</div>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default BottomSheetDialog;
