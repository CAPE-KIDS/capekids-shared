import { z } from "zod";

export const restReponseSchama = z.object({
  error: z.boolean(),
  data: z.any().nullable(),
  message: z.string(),
});
export type RestResponseSchemaType = z.infer<typeof restReponseSchama>;
