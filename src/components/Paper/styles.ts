import styled from 'styled-components';

interface PaperProps {
  marginTop?: boolean;
}

export const Paper = styled.div<PaperProps>`
  width: 100%;
  max-width: 720px;

  margin-top: ${(props) => (props.marginTop ? 40 : 0)}px;

  position: relative;
  display: flex;
  flex-direction: column;

  align-items: start;

  box-sizing: border-box;

  border-radius: 8px;

  padding: 16px;
  padding-top: 14px;

  background: ${(props) => props.theme.neutral_color_01};
  border: 2px solid ${(props) => props.theme.neutral_color_03};

  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0px 4px 8px ${(props) => props.theme.boxShadow};
  }
`;
