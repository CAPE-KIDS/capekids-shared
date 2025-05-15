import { z } from "zod";

export const stepConnectionSchema = z.object({
  id: z.string().uuid().nullable(), // Nullable in frontend
  timelineId: z.string().uuid(),
  fromStepId: z.string().uuid(),
  toStepId: z.string().uuid(),
  condition: z.string().nullable(),
});
export type StepConnectionSchemaType = z.infer<typeof stepConnectionSchema>;
