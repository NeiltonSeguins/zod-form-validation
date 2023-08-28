import React, { useState } from "react";
import styled from "styled-components";
import schema from "../validation";
import { z } from "zod";

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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const Form: React.FC = () => {
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<z.ZodIssue[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const validatedData = schema.parse(formData);
      console.log("Dados válidos:", validatedData);
      setFormData({ name: "", email: "", password: "" });
      setError([]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Erro de validação:", error.issues);
        setError(error.issues);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input
        onChange={handleChange}
        type="text"
        name="name"
        value={formData.name}
      />
      {error.map(
        (issue) =>
          issue.path[0] === "name" && (
            <ErrorMessage key="name">{issue.message}</ErrorMessage>
          )
      )}
      <Label>Email:</Label>
      <Input
        onChange={handleChange}
        type="email"
        name="email"
        value={formData.email}
      />
      {error.map(
        (issue) =>
          issue.path[0] === "email" && (
            <ErrorMessage key="email">{issue.message}</ErrorMessage>
          )
      )}
      <Label>Senha:</Label>
      <Input
        onChange={handleChange}
        type="password"
        name="password"
        value={formData.password}
      />
      {error.map(
        (issue) =>
          issue.path[0] === "password" && (
            <ErrorMessage key="password">{issue.message}</ErrorMessage>
          )
      )}
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};

export default Form;
