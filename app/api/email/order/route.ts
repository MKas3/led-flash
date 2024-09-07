import type { NextRequest } from 'next/server';

import { footerFormSchema } from '@/config/footer';
import * as nodemailer from 'nodemailer';
import { ZodError } from 'zod';

import { env } from '@/lib/env';

const bodySchema = footerFormSchema;

let orderCounter = 0; // Initialize the counter

export const POST = async (request: NextRequest) => {
  try {
    orderCounter++; // Increment the counter
    const body = bodySchema.parse(await request.json());

    const transporter = nodemailer.createTransport({
      auth: {
        pass: env.EMAIL_PASS,
        user: env.EMAIL_USER
      },
      host: env.EMAIL_HOST,
      port: env.EMAIL_PORT,
      secure: true
    });

    const info = transporter.sendMail({
      from: env.EMAIL_USER,
      html: `
          <!DOCTYPE html>
          <html lang="ru">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Заявка</title>
              <style>
                body {
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
              <h1>Заявка №${orderCounter}</h1>
              <br />
              <p><strong>ФИО:</strong> ${body.fullName}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Телефон:</strong> +${body.phone}</p>
              <p><strong>Способ контакта:</strong> ${{ phone: 'Телефон', telegram: 'Telegram', whatsapp: 'Whatsapp' }[body.contactWay]}</p>
              <p><strong>Номер заявки:</strong> ${orderCounter}</p>
          </body>
          </html>
        `,
      subject: `Заявка на Led Flash - Заявка №${orderCounter}`,
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
