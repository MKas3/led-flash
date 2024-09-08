import { z } from 'zod';

import ProcessEnv = NodeJS.ProcessEnv;

const environmentSchema = z.object({
  ANALYZE: z.coerce.boolean().optional(),
  API_URL: z.string().url(),
  EMAIL_HOST: z.string(),
  EMAIL_LOGO_IMAGE: z.string().url(),
  EMAIL_PASS: z.string(),
  EMAIL_PORT: z.coerce.number(),
  EMAIL_RECEIVER: z.string().email(),
  EMAIL_USER: z.string(),
  NODE_ENV: z.string(),
  YMAP_API_KEY: z.string()
});

// eslint-disable-next-line node/prefer-global/process
const { ANALYZE, API_URL, EMAIL_HOST, EMAIL_LOGO_IMAGE, EMAIL_PASS, EMAIL_PORT, EMAIL_RECEIVER, EMAIL_USER, NODE_ENV, YMAP_API_KEY } = process.env;

type Environment = z.infer<typeof environmentSchema>;

export const env = environmentSchema.parse({
  ANALYZE,
  API_URL,
  EMAIL_HOST,
  EMAIL_LOGO_IMAGE,
  EMAIL_PASS,
  EMAIL_PORT,
  EMAIL_RECEIVER,
  EMAIL_USER,
  NODE_ENV,
  YMAP_API_KEY
}) as Environment & ProcessEnv;

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line ts/consistent-type-definitions
    interface ProcessEnv extends Environment {}
  }
}
