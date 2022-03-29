import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  max-width: 720px;

  p strong {
    font-weight: 700;
    font-size: 32px;
  }

  .main-title {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;
