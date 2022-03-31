import styled, { css } from 'styled-components';

const buttonColors = (props: any) => {
  return {
    colorMain:
      props.variation === 'secondary'
        ? props.theme.neutral_color_06
        : props.variation === 'tertiary'
        ? props.theme.neutral_color_03
        : props.theme.primary_color_03,

    colorHover:
      props.variation === 'secondary'
        ? props.theme.neutral_color_05
        : props.variation === 'tertiary'
        ? props.theme.neutral_color_02
        : props.theme.primary_color_02,
    textColor:
      props.variation === 'secondary'
        ? props.theme.neutral_color_01
        : props.theme.neutral_color_06,
  };
};

export const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

interface InnerButtonContainerProps {
  disabled: boolean;
  isLoading: boolean;
  width?: number;
  variation: string;
}

export const InnerButtonContainer = styled.section<InnerButtonContainerProps>`
  width: intrinsic;
  width: -moz-max-content;
  width: -webkit-max-content;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    !props.disabled &&
    !props.isLoading &&
    css`
      &:focus > .btn_root {
        background-color: ${buttonColors(props).colorMain};
        border: 1px solid ${(props) => props.theme.focus_color_01};
        border-radius: 4px;
        box-shadow: 0px 0px 24px ${(props) => props.theme.focus_color_01};
      }
    `}

  .btn_root {
    ${(props) =>
      !props.disabled &&
      !props.isLoading &&
      css`
        background-position: center;

        background: ${buttonColors(props).colorMain}
          radial-gradient(
            circle,
            transparent 1%,
            ${buttonColors(props).colorMain} 1%
          )
          center/15000%;

        &:active {
          background-color: ${buttonColors(props).colorMain};
          background-size: 100%;
          transition: background 0s;
        }

        &:hover {
          background-color: ${buttonColors(props).colorHover};
        }
      `}

    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    width: intrinsic;
    width: -moz-max-content;
    width: -webkit-max-content;
    transition: background-color 0.4s, background 0.4s ease-in, width 0.4s,
      padding 0.4s;

    ${(props) =>
      props.width &&
      css`
        width: ${props.width}px;
        text-align: center;
      `}

    &:focus {
      outline: none;
    }

    ${(props) =>
      props.variation &&
      css`
        .btn_text {
          text-transform: none;
          color: ${buttonColors(props).textColor};
          font-weight: bold;
          font-size: 15px;
        }
      `}
  }

  ${(props) =>
    props.disabled &&
    css`
      .btn_root {
        background-color: ${(props) => props.theme.neutral_color_04};
        cursor: disabled;

        .btn_text {
          color: ${(props) => props.theme.neutral_color_05};
        }

        &:hover {
          background-color: ${(props) => props.theme.neutral_color_04};
        }
      }
    `}

  .loading {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.primary_color_03};
    height: 40px;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 12px;

    ${(props) =>
      props.width &&
      css`
        width: ${props.width + 8}px;
      `}

    .btn_text_loading {
      cursor: pointer;
      text-transform: none;
      color: ${(props) => props.theme.neutral_color_06};
      font-weight: bold;
      font-size: 15px;
      margin-left: 12px;
      padding-right: 30px;
    }
  }
`;
