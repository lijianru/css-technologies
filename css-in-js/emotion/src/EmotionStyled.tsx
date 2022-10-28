import styled from '@emotion/styled';
import { Button } from 'antd';

const StyledButton = styled.button`
  background-color: red;
  margin: 10px;
  padding: 10px;
`;

const StyledAntdButton = styled(Button)`
  background-color: red;
  margin: 10px;
`;

export function EmotionStyled() {
  return (
    <>
      <StyledButton>Click</StyledButton>
      <StyledAntdButton>Click StyledAntdButton</StyledAntdButton>
    </>
  );
}
