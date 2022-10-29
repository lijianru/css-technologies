// The next line is required for the css prop to work!
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';

const color = 'black';

const style = css`
  color: hotpink;
  &:hover {
    background-color: ${color};
  }
`;

const SomeComponent = () => <div css={style}>Some hotpink text.</div>;

const anotherStyle = css({
  color: 'hotpink',
  textDecoration: 'underline',
  '&:hover': {
    backgroundColor: color,
  },
});

const AnotherComponent = () => <div css={anotherStyle}>Some text with an underline.</div>;

const inputStringStyle = (props: any) => css`
  background-color: ${color};
  color: ${props.color};
`;

const StyledInput1 = styled.input`
  ${inputStringStyle}
`;

const inputObjectStyle = (props: any) =>
  css({
    backgroundColor: color,
    color: props.color,
  });

const StyledInput2 = styled.input`
  ${inputObjectStyle}
`;

export function EmotionReact() {
  return (
    <>
      <SomeComponent />
      <AnotherComponent />
      <StyledInput1 color="green" />
      <StyledInput2 color="red" />
      <Button css={style}>EmotionReact</Button>
    </>
  );
}
