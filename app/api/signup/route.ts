import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email } = await req.json()

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!, // 👈 set this in .env.local
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [4],
        updateEnabled: true
      })
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error("Brevo error:", errorData)
      return NextResponse.json({ error: "Brevo error", details: errorData }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Internal error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
