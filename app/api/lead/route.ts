import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Log the lead submission with detailed information
    console.log("=== NEW LEAD SUBMISSION ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Service Type:", data.serviceType || "Not specified");
    console.log("Client Type:", data.clientType || "Not specified");
    console.log("Message:", data.message || "(No message provided)");
    console.log("Full Data:", JSON.stringify(data, null, 2));
    console.log("===========================");

    // TODO: Integrate with your preferred service:
    // - Send email via SendGrid, Resend, or similar
    // - Save to database (MongoDB, PostgreSQL, etc.)
    // - Send to CRM (HubSpot, Salesforce, etc.)
    // - Send to Jobber booking system
    // - Send to Google Sheets via API
    
    // Example integration placeholder:
    // await sendEmail({
    //   to: "statenislandwashkings@gmail.com",
    //   subject: `New Lead: ${data.serviceType || "General"} - ${data.clientType || "Not specified"}`,
    //   body: `New lead form submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.serviceType || "N/A"}\nType: ${data.clientType || "N/A"}\nMessage: ${data.message || "N/A"}\n\nSubmitted: ${new Date().toLocaleString()}`
    // });

    return NextResponse.json({ 
      success: true, 
      message: "Thank you! We'll contact you soon.",
      data: {
        submittedAt: new Date().toISOString(),
        leadId: `LEAD-${Date.now()}`,
        ...data
      }
    });
  } catch (error) {
    console.error("Error processing lead form submission:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process lead submission. Please call us at (917) 397-0128." 
      },
      { status: 500 }
    );
  }
}

