import LinkButton from '../../LinkButton';

interface MenuLinksProps {
  callback?: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ callback }: MenuLinksProps) => {
  return (
    <ul>
      <li onClick={callback}>
        <LinkButton label='Home' to='/' />
      </li>

      <li onClick={callback}>
        <LinkButton label='Create' to='create-menu-template' />
      </li>
    </ul>
  );
};

export default MenuLinks;
