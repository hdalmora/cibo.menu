import { useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
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

    try {
      setLoading(true);

      await validateLoginEmail(data);

      const { error } = await supabase.auth.signIn(data);

      if (error) {
        if (error.status === 429) {
          toast.success('Um e-mail já foi enviado para este endereço! 🤩');
        } else {
          toast.error('Oops, ocorreu um erro 😖');
        }
      } else {
        toast.success('Ae, um e-mail foi enviado para você logar! 🥳');
      }
    } catch (error: any) {
      const validationErrors: any = {};

      error.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);

      toast.warn('Você precisa digitar um e-mail! 🧐');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <p className='login-txt'>
        Com o <span className='primary-txt'>Cibo</span>,
      </p>
      <p className='login-txt'>
        você pode criar <span className='secondary-txt'>incríveis </span>
        <span className='primary-txt'>Cardápios digitais</span> para o seu
        comércio!
      </p>
      <p className='login-txt'>
        Comece agora fazendo o Login com seu
        <span className='secondary-txt'> melhor e-mail:</span>
      </p>

      <Form ref={formRef} onSubmit={handleLogin}>
        <S.InputContainer>
          <FieldArea>
            <CustomInput
              name='email'
              placeholder='Seu melhor e-mail'
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
          text='Enviar Link Mágico 🧙'
        />
      </Form>
    </S.Container>
  );
};

export default Auth;
