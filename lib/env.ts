import { z } from 'zod';

import ProcessEnv = NodeJS.ProcessEnv;

const environmentSchema = z.object({
  ANALYZE: z.coerce.boolean().optional(),
  YMAP_API_KEY: z.string()
});

// eslint-disable-next-line node/prefer-global/process
const { ANALYZE, YMAP_API_KEY } = process.env;

type Environment = z.infer<typeof environmentSchema>;

export const env = environmentSchema.parse({
  ANALYZE,
  YMAP_API_KEY
}) as Environment & ProcessEnv;

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line ts/consistent-type-definitions
    interface ProcessEnv extends Environment {}
  }
}
