import { ReactNode, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useLocation } from 'react-router-dom';
import { AiFillCaretDown, AiOutlineMenu } from 'react-icons/ai';
import { MenuItem, Menu } from '@material-ui/core';
// import useUserProfile from '../../customHooks/useUserProfile';
import LinkButton from '../LinkButton';
import supabase from '../../../supabaseClient';
import * as S from './styles';
import BottomSheetDialog from '../BottomSheetDialog';
import MenuLinks from './MenuLinks';

interface NavigationProps {
  children: ReactNode;
  userSession: Session | null;
}

const Navigation: React.FC<NavigationProps> = ({
  children,
  userSession,
}: NavigationProps) => {
  // const { loading, username, avatar_url, website } =
  //   useUserProfile(userSession);

  const [openUserMenu, setOpenUserMenu] = useState(null);

  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const isSignedIn = !!userSession;
  const hide = pathname.includes('/menu/') || pathname.includes('/qrcode/');

  const handleClickUserMenu = (event: any) => {
    setOpenUserMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(null);
  };

  const handleLogout = () => {
    setOpenUserMenu(null);
    supabase.auth.signOut();
  };

  return (
    <S.Container hide={hide}>
      <nav>
        <div>
          <span className='nav-title'>Cibo.menu</span>

          <MenuLinks isSignedIn={isSignedIn} />
        </div>

        <div className='hamburguer'>
          <AiOutlineMenu
            onClick={() => {
              setOpenMenu(true);
            }}
          />

          <BottomSheetDialog
            open={openMenu}
            onClose={() => {
              setOpenMenu(false);
            }}
            maxHeight={50}
          >
            <MenuLinks
              isSignedIn={isSignedIn}
              callback={() => {
                setOpenMenu(false);
              }}
            />
          </BottomSheetDialog>
        </div>

        {isSignedIn && (
          <ul>
            <li
              className='profile-menu'
              aria-controls='navigation-user-menu'
              aria-haspopup='true'
              onClick={handleClickUserMenu}
            >
              <p className='user-email-nav'>{userSession?.user?.email}</p>
              <AiFillCaretDown />
            </li>
          </ul>
        )}

        <Menu
          id='navigation-user-menu'
          anchorEl={openUserMenu}
          keepMounted
          open={Boolean(openUserMenu)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </nav>

      <main>{children}</main>
    </S.Container>
  );
};

export default Navigation;
