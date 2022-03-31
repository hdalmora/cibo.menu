import styled, { css } from 'styled-components';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

const OpenState = css`
  > div + div {
    animation: slide-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes slide-bottom {
      0% {
        transform: translateY(300px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const Container = styled(Dialog)<DialogProps>`
  z-index: 1600 !important;
  background-color: ${(props) => props.theme.neutral_shadow_01};

  > div {
    animation: slideIn 550ms cubic-bezier(0.42, 0, 0.21, 1) 1;

    @keyframes slideIn {
      from {
        transform: translateY(-120px);
        opacity: 0;
      }
      25% {
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  ${(props) => props.open && OpenState}
`;

interface ContentProps {
  maxHeight?: number;
}

export const Content = styled.div<ContentProps>`
  width: 70%;
  height: ${(props) =>
    props.maxHeight ? `calc(${props.maxHeight}% - 40px)` : 'calc(90% - 40px)'};

  position: fixed;
  bottom: 0;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  background: ${(props) => props.theme.neutral_color_01};
  border-radius: 8px 8px 0 0 !important;
  overflow: visible;

  padding: 16px 16px 0px 16px;

  #modal-content {
    scroll-behavior: smooth;
    height: 100%;

    width: 100%;

    > div {
      height: 100%;

      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.neutral_color_03};
        border-radius: 4px;
      }
    }
  }

  @media (max-width: 1600px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    ul {
      padding: 2rem;

      li span a span {
        font-size: 3em;
      }

      li {
        margin-bottom: 3rem;
      }
    }
  }
`;
