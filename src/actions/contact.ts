"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export async function submitContact(data: ContactData) {
  try {
    await resend.emails.send({
      from: "Flora <noreply@flora.ar>",
      to: process.env.CONTACT_EMAIL || "hola@flora.ar",
      replyTo: data.email || undefined,
      subject: `Nueva consulta de ${data.nombre} — Flora`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0A0514;color:#F7F6EB;">
          <div style="margin-bottom:24px;">
            <span style="color:#9B7BBF;font-size:22px;font-weight:700;">Flora</span>
            <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:4px 0 0;">Nueva consulta desde el sitio web</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);width:110px;">Nombre</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">${data.nombre}</td></tr>
            ${data.email ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">${data.email}</td></tr>` : ""}
            ${data.telefono ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">${data.telefono}</td></tr>` : ""}
            <tr><td style="padding:10px 0;color:rgba(255,255,255,0.4);vertical-align:top;">Mensaje</td><td style="padding:10px 0;line-height:1.6;">${data.mensaje.replace(/\n/g,"<br>")}</td></tr>
          </table>
        </div>
      `,
    });
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}
