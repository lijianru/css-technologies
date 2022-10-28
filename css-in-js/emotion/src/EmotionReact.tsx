// The next line is required for the css prop to work!
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'antd';

const style = css`
  color: hotpink;
  &:hover {
    background-color: black;
  }
`;

const SomeComponent = () => <div css={style}>Some hotpink text.</div>;

const anotherStyle = css({
  color: 'hotpink',
  textDecoration: 'underline',
  '&:hover': {
    backgroundColor: 'black',
  },
});

const AnotherComponent = () => <div css={anotherStyle}>Some text with an underline.</div>;

export function EmotionReact() {
  return (
    <>
      <SomeComponent />
      <AnotherComponent />
      <Button css={style}>EmotionReact</Button>
    </>
  );
}
