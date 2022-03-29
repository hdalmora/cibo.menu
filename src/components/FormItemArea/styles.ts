import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  p {
    text-align: start;
    margin-left: 10px;

    color: ${(props) => props.theme.neutral_color_05};
    font-weight: 500;

    margin-top: 0.5rem;
  }
`;
