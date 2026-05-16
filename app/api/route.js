import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "Reminder <onboarding@resend.dev>",
    to: "your@email.com",
    subject: "Test",
    html: "<p>Hello</p>",
  });

  return Response.json({ success: true });
    }
