import './App.css';
import { Select } from 'antd';
import styled, { keyframes, ThemeProvider } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledSelect = styled(Select)`
  display: block;
  width: ${(props) => (props.defaultValue === 'jack' ? '200px' : '400px')};
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.color || 'red'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const StyledDiv = styled.div`
  color: ${(props) => props.theme.main};

  &:hover {
    color: red;
  }
`;

const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        main: 'blue',
      }}
    >
      <div className="App">
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <StyledSelect defaultValue="jack">
          <Select.Option value="jack">Jack</Select.Option>
        </StyledSelect>
        <StyledSelect defaultValue="jack1">
          <Select.Option value="jack1">Jack1</Select.Option>
        </StyledSelect>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" color="blue" />
        <StyledDiv>Hello world!</StyledDiv>
        <StyledInput placeholder="A small text input" />
        <StyledInput placeholder="A bigger text input" size="2em" />
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </div>
    </ThemeProvider>
  );
}

export default App;
