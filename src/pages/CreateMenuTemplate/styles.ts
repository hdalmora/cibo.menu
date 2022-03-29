import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 720px;

  .menu-infos {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button[type='submit'] {
      align-self: end;

      margin-bottom: 1rem;
    }
  }

  p.empty-form-text {
    margin-top: 2rem;
  }
`;
