import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import ReactRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import supabase from '../supabaseClient';
import theme from './styles/theme';

function App() {
  const [userSession, setUserSession] = useState<Session | null>(null);

  useEffect(() => {
    setUserSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ReactRoutes userSession={userSession} />
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </ThemeProvider>
  );
}

export default App;
