import * as S from './styles';

interface BottomSheetDialogProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  maxHeight?: number;
}

const BottomSheetDialog: React.FC<BottomSheetDialogProps> = ({
  open,
  children,
  onClose,
  maxHeight,
}: BottomSheetDialogProps) => {
  return (
    <S.Container open={open} onClose={onClose}>
      <S.Content maxHeight={maxHeight}>
        <div id='modal-content'>
          <div>{children}</div>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default BottomSheetDialog;
