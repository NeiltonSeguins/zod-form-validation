import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

export default schema;
