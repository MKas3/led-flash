import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const feedbackBodySchema = zfd.formData({
  feedback: zfd.text(z.string().min(1)),
  fullName: zfd.text(z.string().min(1)),
  images: z.union([zfd.file().array(), zfd.file()]).optional(),
  phone: zfd.text(z.string().min(1).regex(/^\d{11}$/g)),
  rating: zfd.numeric(z.number().min(1).max(5))
});
