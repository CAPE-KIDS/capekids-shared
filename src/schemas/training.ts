import { z } from "zod";

export const trainingSchema = z.object({
  id: z.string().uuid(),
  scientistId: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["draft", "active", "closed", "archived"]),
  sessionsLimit: z.number().nullable(),
  accessCode: z.string().nullable(),
});
export type TrainingSchemaType = z.infer<typeof trainingSchema>;
