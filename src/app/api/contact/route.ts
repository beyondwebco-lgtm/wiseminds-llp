import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, industry, service, requirements } = body;

    // Strict validation
    if (!name || !company || !email || !phone || !requirements) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Company, Email, Phone, Requirements).",
        },
        { status: 400 }
      );
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // Server-side logging for consulting inquiries
    console.log("=== NEW CONSULTATION ENQUIRY ===");
    console.log("Date:", new Date().toISOString());
    console.log("Client Name:", name);
    console.log("Company:", company);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Industry:", industry || "Not specified");
    console.log("Service Required:", service || "General Consultation");
    console.log("Requirements:", requirements);
    console.log("================================");

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been received. Our senior consulting team will contact you within 24 business hours.",
        referenceId: `WBC-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred. Please contact us directly at contact@wiseminds.in.",
      },
      { status: 500 }
    );
  }
}
