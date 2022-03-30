import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  max-width: 720px;

  .home-loading {
    place-self: start;
    display: flex;
    margin-top: 4rem;

    p {
      margin-left: 8px;
      margin-top: 4px;

      font-weight: 700;
    }
  }

  p strong {
    font-weight: 700;
    font-size: 32px;
  }

  p.empty-templates-list-txt {
    display: flex;
    align-items: end;

    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.neutral_color_05};
    border-bottom: 2px solid ${(props) => props.theme.neutral_color_04};
    line-height: 1.2;
    align-self: start;
    margin-top: 4rem;
    cursor: pointer;

    transition: background-color 0.3s;

    span {
      font-size: 12px;
    }

    &:hover {
      background-color: ${(props) => props.theme.primary_color_03};
      color: ${(props) => props.theme.neutral_color_06};
    }
  }

  .main-title {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;
