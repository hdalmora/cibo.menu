import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  button {
    width: 100%;
    height: 48px;

    border-radius: 8px;
    cursor: pointer;

    margin-top: 2rem;

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.95);
    }

    background: ${(props) => props.theme.white};
    border: 2px dashed ${(props) => props.theme.neutral_color_04};

    color: ${(props) => props.theme.textPrimary};
    font-weight: 600;
    font-size: 16px;
  }
`;
