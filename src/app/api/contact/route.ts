// Importing Next.js helper to create a server response
import { NextResponse } from "next/server";

// Importing the Resend library used to send emails
import { Resend } from "resend";

// Creating a new instance of the Resend client using your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Defining the POST handler function for the API route
export async function POST(req: Request) {
    // Parsing the JSON body of the incoming request to extract contact form fields
    const { name, email, message } = await req.json();

    try {
        // Using the Resend API to send an email with the form data
        await resend.emails.send({
            // The email address you're sending the email from (must be verified in Resend)
            from: "info@yourdomain.com",

            // The email address to which the message will be send (your own inbox)
            to: "your-email@example.com",

            // The subject of the email
            subject: "New Contact Form Submission",

            // The content of the email (plain text format)
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message},`
        });

        // If the email is sent successfully, return a JSON response indicating success
        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        // If there's an error (e.g, network issue, bad API key, etc), return an error response
        return NextResponse.json({ success: false, message: "Error sending email."}, { status: 500 });
    }
}