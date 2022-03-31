import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .menu-card-infos {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-title-desc {
    display: flex;
    flex-direction: column;
    align-items: start;

    p {
      text-align: start;
    }

    p:first-child {
      font-size: 22px;
      font-weight: 600;

      margin-bottom: 8px;
    }
  }

  .menu-actions {
    span {
      font-size: 32px;

      svg:not(:last-child) {
        margin-right: 16px;
      }

      svg {
        color: ${(props) => props.theme.neutral_color_05};
        cursor: pointer;
      }
    }
  }
`;
