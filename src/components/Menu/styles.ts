import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  background: ${(props) => props.theme.neutral_color_02};
  border-radius: 8px 8px 0px 0px;

  padding: 3rem 3rem 0px 3rem;
  box-sizing: border-box;

  p.title {
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 8px;
  }

  p.sub-title {
    font-weight: 500;
  }
`;

export const MenuContent = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  > div {
    margin-bottom: 1.8rem;
  }
`;

export const MenuSection = styled.p`
  color: ${(props) => props.theme.primary_color_03};
  font-weight: 700;
  font-size: 1.8em;
  margin-bottom: 2rem;

  hr.solid {
    border-top: 3px solid ${(props) => props.theme.neutral_color_03};
  }
`;

export const MenuSectionContent = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .item-container {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    span {
      margin-left: 1rem;
    }
  }

  .item-content {
    display: flex;
    flex-direction: column;

    .food {
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .price {
      font-weight: 500;
      font-size: 1.1em;
      color: ${(props) => props.theme.neutral_color_05};
    }
  }

  .item-number {
    width: 8px;
    height: 8px;
    padding: 16px;
    background-color: ${(props) => props.theme.primary_color_03};
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.6em;
    justify-content: center;
    color: white;
  }
`;
