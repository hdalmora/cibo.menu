import {
  AiOutlineQrcode,
  AiOutlineFileSearch,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import * as S from './styles';
import Paper from '../../components/Paper';

interface CardItemProps {
  title: string;
  description?: string;
  seeMenuLink: string;
  OnGenerateQRCodeClicked?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  seeMenuLink,
  OnGenerateQRCodeClicked,
  onEdit,
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
              <NavLink
                to={seeMenuLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineFileSearch data-tip='See my menu page' />
              </NavLink>

              <AiOutlineQrcode
                onClick={OnGenerateQRCodeClicked}
                data-tip='Generate QR-code'
              />
              <AiFillEdit onClick={onEdit} data-tip='Edit menu' />
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
