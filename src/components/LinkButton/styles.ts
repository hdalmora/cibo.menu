import styled from 'styled-components';

export const Container = styled.span`
  display: flex;

  .isActive {
    border-bottom: 3px solid ${(props) => props.theme.primary_color_01};
  }

  a {
    border-bottom: 3px solid transparent;

    span {
      color: ${(props) => props.theme.textPrimary};
      font-weight: 700;
      font-size: 20px;
    }

    transition: all 0.2s linear;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.primary_color_01};
    }
  }
`;
