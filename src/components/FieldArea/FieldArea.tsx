import { useRef, useState, useCallback } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import * as S from './styles';

interface FieldAreaProps {
  children: React.ReactNode;
}

const FieldArea: React.FC<FieldAreaProps> = ({ children }: FieldAreaProps) => {
  const [selected, setSelected] = useState(false);

  const outsideClickRef = useRef(null);

  useOutsideClick(outsideClickRef, () => {
    setSelected(false);
  });

  const handleSelect = useCallback(() => {
    if (!selected) setSelected(true);
  }, []);

  return (
    <S.Container
      ref={outsideClickRef}
      onClick={handleSelect}
      selected={selected}
    >
      {children}
    </S.Container>
  );
};

export default FieldArea;
