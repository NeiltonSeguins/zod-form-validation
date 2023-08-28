import styled from "styled-components";
import Form from "./components/Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  background-color: #252525;
  padding: 32px;
  border-radius: 10px;
`;

function App() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
