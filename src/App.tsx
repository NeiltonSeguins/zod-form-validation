import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import schema from "./validation";

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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject: any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const validatedData = schema.parse(formDataObject);
      console.log("Dados válidos:", validatedData);
      // Aqui você pode implementar a lógica de envio do formulário
    } catch (error) {
      console.error("Erro de validação:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
