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

  p.empty-templates-list-txt {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.neutral_color_05};
    border-bottom: 2px solid ${(props) => props.theme.neutral_color_04};
    line-height: 1.5;
    align-self: start;
    margin-top: 4rem;
  }

  .main-title {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;
