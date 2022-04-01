import LinkButton from '../../LinkButton';

interface MenuLinksProps {
  callback?: () => void;
  isSignedIn: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({
  callback,
  isSignedIn,
}: MenuLinksProps) => {
  return (
    <>
      {isSignedIn && (
        <ul>
          <li onClick={callback}>
            <LinkButton label='Home' to='/' />
          </li>

          <li onClick={callback}>
            <LinkButton label='Criar' to='create-menu-template' />
          </li>
        </ul>
      )}

      {!isSignedIn && (
        <ul>
          <li onClick={callback}>
            <LinkButton label='Entrando!' to='/auth' />
          </li>
        </ul>
      )}
    </>
  );
};

export default MenuLinks;
