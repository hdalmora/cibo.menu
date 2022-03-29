import styled, { css } from 'styled-components';

const DeleteButtonContainer = css`
  button.add-menu-item-btn.delete {
    padding: 4px;
    margin-top: 1rem;
    opacity: 1;
    pointer-events: all;

    &:hover {
      background: ${(props) => props.theme.neutral_color_06};
      color: ${(props) => props.theme.neutral_color_01};
    }
  }
`;

const ContainerSelectedState = css`
  background: ${(props) => props.theme.neutral_color_03};

  ${DeleteButtonContainer}
`;

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  transition: all 0.4s;

  button.add-menu-item-btn.delete {
    padding: 0;
    margin-top: 0;
    opacity: 0;
    transition: all 0.4s;
    pointer-events: none;
  }

  &:hover {
    background: ${(props) => props.theme.neutral_color_03};

    ${DeleteButtonContainer}
  }

  div.field-input:not(:first-child) {
    margin-top: 0.5rem;
  }

  ${(props) => props.selected && ContainerSelectedState}
`;
