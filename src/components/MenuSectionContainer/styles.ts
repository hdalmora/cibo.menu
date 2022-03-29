import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    width: 100%;
  }

  .section-name {
    margin-top: 1rem;
  }

  .delete-section-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 26px;
    color: ${(props) => props.theme.neutral_color_05};
    cursor: pointer;
  }

  button.add-menu-item-btn {
    background: white;
    border: none;
    padding: 4px;
    border-radius: 4px;
    color: ${(props) => props.theme.textPrimary};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;

    margin-top: 1.5rem;

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
