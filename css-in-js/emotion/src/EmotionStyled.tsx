import styled from '@emotion/styled';
import { Button } from 'antd';

const color = 'red';

const StyledButton = styled.button`
  background-color: ${color};
  color: ${(props) => (props.disabled ? 'black' : 'white')};
`;

const StyledAntdButton = styled(Button)`
  background-color: ${color};
  margin: 10px;
  color: ${(props) => (props.type === 'primary' ? 'black' : 'white')};
  &:hover {
    background-color: white;
  }
`;

export function EmotionStyled() {
  return (
    <>
      <StyledButton disabled>Click</StyledButton>
      <StyledAntdButton type="primary">Click StyledAntdButton</StyledAntdButton>
    </>
  );
}
