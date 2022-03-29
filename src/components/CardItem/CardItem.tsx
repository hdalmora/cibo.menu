import {
  AiOutlineQrcode,
  AiOutlineFileSearch,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

import * as S from './styles';
import Paper from '../../components/Paper';

interface CardItemProps {
  title: string;
  description?: string;
  OnSeeMenuClicked?: () => void;
  OnGenerateQRCodeClicked?: () => void;
  OnEditClicked?: () => void;
  onDelete?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  OnSeeMenuClicked,
  OnGenerateQRCodeClicked,
  OnEditClicked,
  onDelete,
}: CardItemProps) => {
  return (
    <S.Container>
      <Paper marginTop>
        <div className='menu-card-infos'>
          <div className='menu-title-desc'>
            <p>{title}</p>
            <p>{description || 'No description'}</p>
          </div>

          <div className='menu-actions'>
            <span>
              <AiOutlineFileSearch
                onClick={OnSeeMenuClicked}
                data-tip='See my menu page'
              />
              <AiOutlineQrcode
                onClick={OnGenerateQRCodeClicked}
                data-tip='Generate QR-code'
              />
              <AiFillEdit onClick={OnEditClicked} data-tip='Edit menu' />
              <AiFillDelete onClick={onDelete} data-tip='Delete menu' />
            </span>
          </div>
        </div>
      </Paper>

      <ReactTooltip />
    </S.Container>
  );
};

export default CardItem;
