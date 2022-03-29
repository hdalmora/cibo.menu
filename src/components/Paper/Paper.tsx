import * as S from './styles';

interface PaperProps {
  children: React.ReactNode;
  marginTop?: boolean;
}

const Paper: React.FC<PaperProps> = ({ children, marginTop }: PaperProps) => {
  return (
    <S.Paper marginTop={marginTop}>
      <>{children}</>
    </S.Paper>
  );
};

export default Paper;
