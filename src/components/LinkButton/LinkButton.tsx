import { NavLink } from 'react-router-dom';
import * as S from './styles';

interface LinkButtonProps {
  label: string;
  to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  to,
}: LinkButtonProps) => {
  const resolveActiveLink = (props: { isActive: boolean }) =>
    `${props.isActive ? 'isActive ' : ''}`;

  return (
    <S.Container>
      <NavLink className={(props) => resolveActiveLink(props)} to={to}>
        <span>{label}</span>
      </NavLink>
    </S.Container>
  );
};

export default LinkButton;
