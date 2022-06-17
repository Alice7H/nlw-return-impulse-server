import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedback Widget <oi@feedget.com>',
      to: 'Alice Hata <alicehata9@gmail.com>',
      subject,
      html: body,
    });
  }
}