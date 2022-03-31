import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 720px;

  button.preview-btn {
    background: ${(props) => props.theme.yellow300};

    font-weight: 700;
    font-size: 14px;
    border: none;
    padding: 8px 16px;

    border-radius: 16px;

    cursor: pointer;
    transition: all 0.3s;
    margin-left: 16px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div.menu-action-container {
    display: flex;
    align-items: center;

    position: absolute;
    left: -3.5rem;

    div {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      background-color: white;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 18px;

      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        filter: brightness(0.95);
      }

      svg {
        font-size: 22px;
      }
    }

    p {
      font-weight: 700;
      font-size: 24px;
      color: ${(props) => props.theme.neutral_color_05};
    }
  }

  .menu-infos {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    button[type='submit'] {
      align-self: end;

      margin-bottom: 1rem;
    }
  }

  p.empty-form-text {
    margin-top: 2rem;

    font-weight: 700;
    color: ${(props) => props.theme.neutral_color_05};
  }
`;
