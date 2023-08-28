import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  min-width: 300px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

interface FormProps {
  onSubmit: (event: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>Nome:</Label>
      <Input type="text" name="name" required />
      <Label>Email:</Label>
      <Input type="email" name="email" required />
      <Label>Mensagem:</Label>
      <Input as="textarea" name="message" rows={4} required />
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};

export default Form;
