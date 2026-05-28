import type { AreaOfInterest, ConsultationType } from "@/lib/types";

export function buildCalendarUrl(input: {
  baseUrl?: string;
  consultationType?: ConsultationType | "";
  areaOfInterest?: AreaOfInterest | "";
  email?: string;
  companyName?: string;
}) {
  const base = input.baseUrl ?? "https://mycalendar.ciright.com";
  const u = new URL(base);

  // Keep parameters conservative and non-sensitive.
  if (input.consultationType) u.searchParams.set("consultationType", input.consultationType);
  if (input.areaOfInterest) u.searchParams.set("areaOfInterest", input.areaOfInterest);
  if (input.companyName) u.searchParams.set("company", input.companyName);
  if (input.email) u.searchParams.set("email", input.email);

  return u.toString();
}

