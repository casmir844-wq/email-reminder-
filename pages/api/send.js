import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  await resend.emails.send({
    from: "Reminder <onboarding@resend.dev>",
    to: "your@email.com",
    subject: "Test Reminder",
    html: "<p>Hello! This is your reminder system working.</p>",
  });

  res.json({ success: true });
}
