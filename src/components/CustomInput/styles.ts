import styled, { css } from 'styled-components';

const InputErrorState = css`
  input {
    border-bottom: 2px solid ${(props) => props.theme.alert_color_04};
  }
`;

const InputMainState = css`
  input {
    font-size: 18px;
    font-weight: 600;
  }
`;

interface TextFieldContainerProps {
  error: boolean;
  main?: boolean;
}

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  width: 95%;

  text-align: start;

  input {
    width: 100%;
    line-height: 1.4;

    background: transparent;

    border: none;
    border-bottom: 2px dashed transparent;

    transition: all 0.3s;
  }

  input:hover {
    border-bottom: 2px dashed ${(props) => props.theme.neutral_color_04};
  }

  input:focus {
    outline: none;
    border-bottom: 2px dashed ${(props) => props.theme.neutral_color_06};
  }

  ${(props) => props.error && InputErrorState}
  ${(props) => props.main && InputMainState}
`;
