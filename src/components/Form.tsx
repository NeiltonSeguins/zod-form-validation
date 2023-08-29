import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 8px;
  margin-top: 4px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  min-width: 300px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 16px;
`;

const Form: React.FC = () => {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  return (
    <FormContainer>
      <Label>Nome:</Label>
      <Input
        onChange={handleChange}
        type="text"
        name="name"
        value={formData.name}
      />
      <Label>Email:</Label>
      <Input
        onChange={handleChange}
        type="email"
        name="email"
        value={formData.email}
      />
      <Label>Senha:</Label>
      <Input
        onChange={handleChange}
        type="password"
        name="password"
        value={formData.password}
      />
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};

export default Form;
