import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      company,
      email,
      phone,
      service,
      message,
      website,
    } = result.data;

    // Honeypot
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    await resend.emails.send({
      from: "Novem <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Inquiry from ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;background:#f8f4ef">

      <h2 style="color:#B8794B">
      New Contact Form Submission
      </h2>

      <table cellpadding="10">

      <tr>
      <td><strong>Name</strong></td>
      <td>${name}</td>
      </tr>

      <tr>
      <td><strong>Company</strong></td>
      <td>${company || "-"}</td>
      </tr>

      <tr>
      <td><strong>Email</strong></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><strong>Phone</strong></td>
      <td>${phone || "-"}</td>
      </tr>

      <tr>
      <td><strong>Service</strong></td>
      <td>${service}</td>
      </tr>

      </table>

      <hr/>

      <h3>Message</h3>

      <p>${message.replace(/\n/g, "<br/>")}</p>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}