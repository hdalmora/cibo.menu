import { useParams } from 'react-router-dom';
import QRcode from 'qrcode.react';
import { jsPDF } from 'jspdf';
import BottomSheetDialog from '../../components/BottomSheetDialog';
import * as S from './styles';
import CustomButton from '../../components/CustomButton';

const OpenQRcode: React.FC = () => {
  const { id } = useParams();

  const downloadPDF = () => {
    let pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [40, 40],
    });

    let qrCodeImageReference = document.getElementById('qrcode')
      ?.childNodes[0] as HTMLCanvasElement;

    let base64Image = qrCodeImageReference?.toDataURL();

    if (base64Image) {
      pdf.addImage(base64Image, 'png', 0, 0, 40, 40);
      pdf.save('Menu QR Code.pdf');
    }
  };

  return (
    <S.Container>
      <BottomSheetDialog open={true}>
        <div id='qr-code-content'>
          <div id='qrcode'>
            <QRcode
              value={`http://localhost:3000/menu/${id}`} // TODO change link here
              size={200}
            />
          </div>

          <CustomButton
            disabled={false}
            isLoading={false}
            variation='secondary'
            text='Download QRCode'
            handleButtonClick={downloadPDF}
          />
        </div>
      </BottomSheetDialog>
    </S.Container>
  );
};

export default OpenQRcode;
