import styled, { css } from 'styled-components';

const MainContainer = css`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  color: black;
  align-self: center;
  align-items: center;

  width: 100%;
  text-align: center;
`;

const HideState = css`
  display: none;
`;

interface ContainerProps {
  hide: boolean;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;

  ${(props) => props.hide && HideState}

  main {
    ${MainContainer}
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    box-sizing: border-box;

    width: 100%;

    background: white;
    box-shadow: 0px 4px 8px ${(props) => props.theme.boxShadow};

    padding: 3rem;

    div {
      display: flex;
      align-items: center;
    }

    div.hamburguer {
      display: none;
      cursor: pointer;

      svg {
        font-size: 2.2em;
      }
    }

    span.nav-title {
      color: ${(props) => props.theme.primary_color_01};
      font-weight: 700;
      font-size: 32px;
      pointer-events: none;
    }

    p.user-email-nav {
      overflow: hidden;
      max-width: 164px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 700;
    }

    li.profile-menu {
      display: flex;
      color: ${(props) => props.theme.blue300};
      cursor: pointer;
    }

    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;

      li {
        margin-left: 3rem;
      }
    }
  }

  @media (max-width: 800px) {
    nav {
      div {
        display: none;
      }

      div.hamburguer {
        display: flex;
      }
    }
  }
`;
