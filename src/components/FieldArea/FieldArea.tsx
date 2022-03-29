import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import * as S from './styles';

interface FieldAreaProps {
  children: React.ReactNode;
}

const FieldArea: React.FC<FieldAreaProps> = ({ children }: FieldAreaProps) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (!selected) setSelected(true);
  };

  const handleOutsideClick = () => {
    if (selected) setSelected(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <S.Container onClick={handleSelect} selected={selected}>
        <>{children}</>
      </S.Container>
    </OutsideClickHandler>
  );
};

export default FieldArea;
