import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { AreaOfInterest, ConsultationType, Industry } from "@/lib/types";

type Inquiry = {
  createdAt: string;
  source: "contact" | "schedule";
  firstName: string;
  lastName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  industry: Industry | "Other" | "";
  companySize: string;
  geographicRegion: string;
  areaOfInterest: AreaOfInterest | "";
  currentBusinessChallenge: string;
  operationalGoals: string;
  preferredConsultationType: ConsultationType | "";
  preferredTimeframe: string;
  preferredConsultationDate: string;
  consent: boolean;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Partial<Inquiry> | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const required: Array<keyof Inquiry> = [
    "source",
    "firstName",
    "lastName",
    "companyName",
    "jobTitle",
    "email",
    "phoneNumber",
    "industry",
    "companySize",
    "geographicRegion",
    "areaOfInterest",
    "currentBusinessChallenge",
    "operationalGoals",
    "preferredConsultationType",
    "preferredTimeframe",
    "preferredConsultationDate",
    "consent"
  ];

  for (const k of required) {
    if (body[k] === undefined || body[k] === null) {
      return NextResponse.json({ ok: false, error: `Missing field: ${k}` }, { status: 400 });
    }
  }

  if (!isEmail(String(body.email))) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 400 });
  }

  const inquiry: Inquiry = {
    createdAt: new Date().toISOString(),
    source: body.source === "contact" ? "contact" : "schedule",
    firstName: String(body.firstName).trim(),
    lastName: String(body.lastName).trim(),
    companyName: String(body.companyName).trim(),
    jobTitle: String(body.jobTitle).trim(),
    email: String(body.email).trim(),
    phoneNumber: String(body.phoneNumber).trim(),
    industry: (body.industry as Inquiry["industry"]) ?? "",
    companySize: String(body.companySize ?? "").trim(),
    geographicRegion: String(body.geographicRegion ?? "").trim(),
    areaOfInterest: (body.areaOfInterest as Inquiry["areaOfInterest"]) ?? "",
    currentBusinessChallenge: String(body.currentBusinessChallenge ?? "").trim(),
    operationalGoals: String(body.operationalGoals ?? "").trim(),
    preferredConsultationType: (body.preferredConsultationType as Inquiry["preferredConsultationType"]) ?? "",
    preferredTimeframe: String(body.preferredTimeframe ?? "").trim(),
    preferredConsultationDate: String(body.preferredConsultationDate ?? "").trim(),
    consent: true
  };

  // Best-effort local persistence (dev / self-host). In many serverless environments
  // this is ephemeral, but it still enables an end-to-end workflow locally.
  try {
    const dataDir = path.join(process.cwd(), ".data");
    const file = path.join(dataDir, "inquiries.jsonl");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(file, `${JSON.stringify(inquiry)}\n`, "utf8");
  } catch {
    // Ignore persistence failures; still acknowledge receipt.
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thank you for contacting CHA Associates PC. Your inquiry has been received. You may now select a consultation time through our secure scheduling platform."
  });
}

