import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';
import Auth from '../pages/Auth';
import CreateMenuTemplate from '../pages/CreateMenuTemplate';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

interface ReactRoutesProps {
  userSession: Session | null;
}

const ReactRoutes: React.FC<ReactRoutesProps> = ({
  userSession,
}: ReactRoutesProps) => {
  return (
    <Router>
      <Navigation userSession={userSession}>
        <>
          <Routes>
            <Route
              path='/'
              element={<PrivateRoute isSignedIn={!!userSession} />}
            >
              <Route path='/' element={<Home userSession={userSession} />} />
            </Route>

            <Route
              path='/create-menu-template'
              element={<PrivateRoute isSignedIn={!!userSession} />}
            >
              <Route
                path='/create-menu-template'
                element={<CreateMenuTemplate userSession={userSession} />}
              />
            </Route>

            <Route path='/auth' element={<Auth isSignedIn={!!userSession} />} />
          </Routes>
        </>
      </Navigation>
    </Router>
  );
};

export default ReactRoutes;
