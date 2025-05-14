import { z } from "zod";

export const taskSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  createdBy: z.string().uuid(),
  isTemplate: z.boolean(),
});
export type TaskSchemaType = z.infer<typeof taskSchema>;
