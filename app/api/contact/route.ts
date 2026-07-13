import { NextResponse } from "next/server";
import { buildContactSchema } from "@/lib/schema";
import en from "@/lib/i18n/dictionaries/en";

const contactSchema = buildContactSchema(en.contact.form.validation);

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("New Niu Susu enquiry:", parsed.data);

  return NextResponse.json({ ok: true });
}
