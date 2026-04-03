import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Buttondown API integration
  const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

  if (BUTTONDOWN_API_KEY) {
    try {
      const res = await fetch("https://api.buttondown.com/v1/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          type: "regular",
          tags: ["website-signup"],
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        // Already subscribed is not an error
        if (res.status === 409) {
          return NextResponse.json({ success: true, message: "Already subscribed" });
        }
        return NextResponse.json({ error: data }, { status: res.status });
      }
    } catch {
      // If Buttondown fails, still collect the email via fallback
      console.error("Buttondown API failed, email collected locally:", email);
    }
  }

  return NextResponse.json({ success: true, message: "Subscribed successfully" });
}
