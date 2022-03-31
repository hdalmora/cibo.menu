import { ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';
import { matchPath, useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
// import useUserProfile from '../../customHooks/useUserProfile';
import LinkButton from '../LinkButton';
import supabase from '../../../supabaseClient';
import * as S from './styles';

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

  const { pathname } = useLocation();

  const isSignedIn = !!userSession;
  const hide = pathname.includes('/menu/') || pathname.includes('/qrcode/');

  return (
    <S.Container hide={hide}>
      <nav>
        <div>
          <span className='nav-title'>Cibo.menu</span>

          {!isSignedIn && (
            <ul>
              <li>
                <LinkButton label='Loggin in!' to='/auth' />
              </li>
            </ul>
          )}

          {isSignedIn && (
            <ul>
              <li>
                <LinkButton label='Home' to='/' />
              </li>

              <li>
                <LinkButton label='Create' to='create-menu-template' />
              </li>
            </ul>
          )}
        </div>

        {isSignedIn && (
          <ul>
            <li
              className='profile-menu'
              onClick={() => {
                supabase.auth.signOut();
              }}
            >
              <p className='user-email-nav'>{userSession?.user?.email}</p>
              <AiFillCaretDown />
            </li>
          </ul>
        )}
      </nav>

      <main>{children}</main>
    </S.Container>
  );
};

export default Navigation;
