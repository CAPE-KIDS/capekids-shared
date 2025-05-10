import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

// register
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "user"]),
});
export type RegisterSchemaType = z.infer<typeof registerSchema>;
