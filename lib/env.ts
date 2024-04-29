import { z } from 'zod';

const environmentSchema = z.object({
  YMAP_API_KEY: z.string(),
});

const { YMAP_API_KEY } = process.env;

const parsedEnvironment = environmentSchema.parse({
  YMAP_API_KEY,
});

type Environment = z.infer<typeof environmentSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
