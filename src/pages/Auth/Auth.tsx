import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../supabaseClient';
import * as S from './styles';

interface AuthProps {
  isSignedIn?: boolean;
}

const Auth: React.FC<AuthProps> = ({ isSignedIn }: AuthProps) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate(-1);
    }
  }, [isSignedIn]);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <h1 className='header'>Supabase + React</h1>
      <p className='description'>
        Sign in via magic link with your email below
      </p>
      {loading ? (
        'Sending magic link...'
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='inputField'
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='button block' aria-live='polite'>
            Send magic link
          </button>
        </form>
      )}
    </S.Container>
  );
};

export default Auth;
