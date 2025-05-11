import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

// profile
export const participantMetadataSchema = z.object({
  age: z.number(),
  gender: z.string(),
  handedness: z.string().optional(),
  nativeLanguage: z.string().optional(),
  medicalConditions: z.array(z.string()).optional(),
  medications: z.array(z.string()).optional(),
  parentalConsent: z.boolean(),
});
export type ParticipantMetadataSchemaType = z.infer<
  typeof participantMetadataSchema
>;

export const psychologistMetadataSchema = z.object({
  licenseNumber: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
  yearsExperience: z.number().optional(),
  clinicOrInstitution: z.string().optional(),
  assessmentTools: z.array(z.string()).optional(),
});
export type PsychologistMetadataSchemaType = z.infer<
  typeof psychologistMetadataSchema
>;

export const researcherMetadataSchema = z.object({
  institution: z.string(),
  department: z.string(),
  degree: z.string(),
  researchAreas: z.array(z.string()).optional(),
  publications: z
    .array(
      z.object({
        title: z.string(),
        journal: z.string(),
        year: z.number(),
        link: z.string().optional(),
      })
    )
    .optional(),
  affiliations: z.array(z.string()).optional(),
  orcidId: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  googleScholar: z.string().url().optional(),
});
export type ResearcherMetadataSchemaType = z.infer<
  typeof researcherMetadataSchema
>;

export const userProfileMetadataSchema = z.object({
  researcher: researcherMetadataSchema.optional(),
  psychologist: psychologistMetadataSchema.optional(),
  participant: participantMetadataSchema.optional(),
});

export type UserProfileMetadataSchemaType = z.infer<
  typeof userProfileMetadataSchema
>;

export const userProfileSchema = z.object({
  fullName: z.string(),
  profileType: z.enum(["researcher", "psychologist", "participant"]),
  metadata: z
    .object({
      researcher: researcherMetadataSchema.optional(),
      psychologist: psychologistMetadataSchema.optional(),
      participant: participantMetadataSchema.optional(),
    })
    .optional(),
});
export type UserProfileSchemaType = z.infer<typeof userProfileSchema>;

export const updateUserProfileSchema = z.object({
  fullName: z.string().optional(),
  metadata: z
    .object({
      researcher: researcherMetadataSchema.optional(),
      psychologist: psychologistMetadataSchema.optional(),
      participant: participantMetadataSchema.optional(),
    })
    .optional(),
});
export type UpdateUserProfileSchemaType = z.infer<
  typeof updateUserProfileSchema
>;

// register
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  profile: z.object({
    fullName: z.string().nonempty(),
    profileType: z.enum(["researcher", "psychologist", "participant"]),
    metadata: z
      .object({
        researcher: researcherMetadataSchema.optional(),
        psychologist: psychologistMetadataSchema.optional(),
        participant: participantMetadataSchema.optional(),
      })
      .optional(),
  }),
});
export type RegisterSchemaType = z.infer<typeof registerSchema>;
