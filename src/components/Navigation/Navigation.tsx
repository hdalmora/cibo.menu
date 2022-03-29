import { ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';
// import useUserProfile from '../../customHooks/useUserProfile';
import LinkButton from '../LinkButton';
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

  const isSignedIn = !!userSession;

  console.log(userSession);

  return (
    <S.Container>
      <nav>
        <div>
          <span className='nav-title'>Cibo.menu</span>

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
            <li>
              <p className='user-email-nav'>{userSession?.user?.email}</p>
            </li>
          </ul>
        )}

        {!isSignedIn && (
          <ul>
            <li>
              <LinkButton label='Loggin in!' to='/auth' />
            </li>
          </ul>
        )}
      </nav>

      <main>{children}</main>
    </S.Container>
  );
};

export default Navigation;
