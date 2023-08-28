import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, "Senha deve ter no min 6 caracteres"),
});

export default schema;
