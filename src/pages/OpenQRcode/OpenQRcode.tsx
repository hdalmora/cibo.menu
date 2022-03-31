import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import BottomSheetDialog from '../../components/BottomSheetDialog';
import * as S from './styles';

const OpenQRcode: React.FC = () => {
  const { id } = useParams();

  return (
    <S.Container>
      <BottomSheetDialog open={true}>
        <QRCode
          title='Have access to our complete menu'
          value={`http://localhost:3000/menu/${id}`} // TODO change link here
        />
      </BottomSheetDialog>
    </S.Container>
  );
};

export default OpenQRcode;
