import type { NextRequest } from 'next/server';

import { Buffer } from 'node:buffer';

import * as nodemailer from 'nodemailer';
import { z, ZodError } from 'zod';
import { zfd } from 'zod-form-data';

import { env } from '@/lib/env';

export const feedbackBodySchema = zfd.formData({
  feedback: zfd.text(z.string().min(1)),
  fullName: zfd.text(z.string().min(1)),
  images: z.union([zfd.file().array(), zfd.file()]).optional(),
  phone: zfd.text(z.string().min(1).regex(/^\d{11}$/g)),
  rating: zfd.numeric(z.number().min(1).max(5))
});

export const POST = async (request: NextRequest) => {
  try {
    const body = feedbackBodySchema.parse(await request.formData());

    const transporter = nodemailer.createTransport({
      auth: {
        pass: env.EMAIL_PASS,
        user: env.EMAIL_USER
      },
      host: env.EMAIL_HOST,
      port: env.EMAIL_PORT,
      secure: true
    });

    const attachments = body.images
      ? await Promise.all((Array.isArray(body.images) ? body.images : [body.images]).map(async (image) => ({
        content: Buffer.from(await image.arrayBuffer()),
        filename: image.name
      })))
      : undefined;

    const info = transporter.sendMail({
      attachments,
      from: env.EMAIL_USER,
      html: `
          <!DOCTYPE html>
          <html lang="ru">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Новый отзыв</title>
              <style>
                body {
                    background: black;
                    color: #FFF;
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                }

                h1 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                }

                p {
                    margin-bottom: 15px;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 10px;
                }

                img {
                    border-radius: var(--radius-sm);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .logo {
                    width: 100%;
                }

                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }

                    h1 {
                        font-size: 1.5rem;
                    }

                    p {
                        margin-bottom: 10px;
                    }
                }
            </style>
          </head>
          <body>
              <img class="logo" alt="Logo" src="${env.EMAIL_LOGO_IMAGE}" />
              <h1>Новый отзыв</h1>
              <p><strong>ФИО:</strong> ${body.fullName}</p>
              <p><strong>Телефон:</strong> +${body.phone}</p>
              <p><strong>Рейтинг:</strong> ${body.rating} из 5</p>
              <p><strong>Отзыв:</strong> ${body.feedback}</p>
              <p>
              ${body.images
    ? `
      <strong>Изображения приложены</strong>
                        `
    : `<strong>Изображений нет</strong>`
}
</p>
          </body>
          </html>
        `,
      subject: 'Новый отзыв на Led Flash',
      to: env.EMAIL_RECEIVER
    });

    return Response.json(info);
  } catch (error) {
    if (error instanceof ZodError)
      return Response.json({ error: { errors: error.errors, message: 'Zod validation error' } }, { status: 400 });
    if (error instanceof Error)
      return Response.json({ error: { message: error.message } }, { status: 400 });
    return Response.json({ error }, { status: 400 });
  }
};
