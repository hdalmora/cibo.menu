import { useRef } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../supabaseClient';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import FieldArea from '../../components/FieldArea';
import { validateLoginEmail } from '../../validations';
import * as S from './styles';

interface AuthProps {
  isSignedIn?: boolean;
}

const Auth: React.FC<AuthProps> = ({ isSignedIn }: AuthProps) => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  let navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate(-1);
    }
  }, [isSignedIn]);

  const handleLogin = async (data: any) => {
    if (loading || !formRef.current) return;

    console.log(data);

    try {
      setLoading(true);

      await validateLoginEmail(data);

      const { error } = await supabase.auth.signIn(data);

      if (error) {
        if (error.status === 429) {
          toast.success('An email has already been sent to this addess! 🦄');
        } else {
          toast.error('An error occured while sending your email');
        }
      } else {
        toast.success('Check your email for the login link! 🦄');
      }
    } catch (error: any) {
      const validationErrors: any = {};

      error.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);

      toast.warn('You must type an e-mail! 🦄');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <p className='login-txt'>
        With <span className='primary-txt'>Cibo</span>,
      </p>
      <p className='login-txt'>
        you can create <span className='secondary-txt'>awesome </span>
        <span className='primary-txt'>digital Menus</span> for your commerce!
      </p>
      <p className='login-txt'>
        Start now by Loggin in with your
        <span className='secondary-txt'>best e-mail:</span>
      </p>

      <Form ref={formRef} onSubmit={handleLogin}>
        <S.InputContainer>
          <FieldArea>
            <CustomInput
              name='email'
              placeholder='Your best e-mail'
              type='email'
              value=''
              main
            />
          </FieldArea>
        </S.InputContainer>

        <CustomButton
          disabled={false}
          isLoading={loading}
          variation='primary'
          text='Send magik Link'
        />
      </Form>
    </S.Container>
  );
};

export default Auth;
