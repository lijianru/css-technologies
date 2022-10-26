import './App.css';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 20px;
  background-color: red;
`;

function App() {
  return (
    <div className="App">
      <StyledButton>Click</StyledButton>
    </div>
  );
}

export default App;
