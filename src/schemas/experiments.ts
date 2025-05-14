import { z } from "zod";

export const createExperimentSchema = z.object({
  status: z.enum(["draft", "active", "closed", "archived"]).default("draft"),
  title: z.string().min(1),
  description: z.string().min(1),
  participantTarget: z.number().optional(),
  allowToJoinAfterFull: z.boolean(),
  accessCode: z.string().optional(),
});
export type CreateExperimentSchemaType = z.infer<typeof createExperimentSchema>;

export const experimentSchema = z.object({
  id: z.string().uuid(),
  creatorId: z.string().uuid(),
  status: z.enum(["draft", "active", "closed", "archived"]),
  title: z.string(),
  description: z.string(),
  participantTarget: z.number(),
  allowExtraParticipants: z.boolean(),
  accessCode: z.string(),
});
export type ExperimentSchemaType = z.infer<typeof experimentSchema>;
