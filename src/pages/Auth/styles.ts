import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  max-width: 920px;

  form {
    width: 100%;
    display: flex;
    margin-top: 2rem;

    button {
      margin-left: 1rem;
    }
  }

  p.login-txt {
    font-weight: 500;
    font-size: 2em;
    text-align: start;

    margin-bottom: 1.5rem;

    span.primary-txt {
      font-size: 1.5em;
      color: ${(props) => props.theme.primary_color_03};
    }

    span.secondary-txt {
      font-weight: 700;
    }
  }

  .main-title {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;

export const InputContainer = styled.div`
  padding: 8px;
  background-color: white;
  width: 40%;
`;
