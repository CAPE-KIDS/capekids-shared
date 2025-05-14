import { z } from "zod";

export const timelineSchema = z.object({
  sourceType: z.enum(["experiment", "task", "training"]),
  sourceId: z.string().uuid(),
});
export type TimelineSchemaType = z.infer<typeof timelineSchema>;

export const stepEnumValues = [
  "start",
  "task",
  "feedback",
  "block",
  "end",
  "sequential_stimuli",
  "custom_block",
] as const;

export const stepTypeEnum = z.enum(stepEnumValues);

export type StepType = z.infer<typeof stepTypeEnum>;

export const timelineStepMetadataSchema = z.object({
  title: z.string(),
  positionX: z.number().nullable(),
  positionY: z.number().nullable(),
  blocks: z.array(z.any()).nullable().optional(),
  triggers: z.array(z.any()).nullable().optional(),
  config: z.any().nullable().optional(),
  group: z.any().nullable().optional(),
});

export type TimelineStepMetadata = z.infer<typeof timelineStepMetadataSchema>;

export const timelineStepSchema = z.object({
  timelineId: z.string().uuid(),
  orderIndex: z.number().nullable(),
  type: stepTypeEnum,
  metadata: timelineStepMetadataSchema,
  taskVersionId: z.string().uuid().optional(),
});

export type TimelineStep = z.infer<typeof timelineStepSchema>;

export const createTimelineStepSchema = z.object({
  timelineId: z.string().uuid(),
  orderIndex: z.number().nullable(),
  type: stepTypeEnum,
  taskVersionId: z.string().uuid().optional(),
  metadata: timelineStepMetadataSchema,
});
export type CreateTimelineStepSchemaType = z.infer<
  typeof createTimelineStepSchema
>;
