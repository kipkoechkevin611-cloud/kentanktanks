import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, location, notes, orderItems, total } = body;

    // Format order items
    const orderDetails = orderItems
      .map((item: any) => `• ${item.name} (${item.capacity}) - ${item.price} x ${item.quantity}`)
      .join('\n');

    const emailContent = `
      <h2>🌊 New Water Tank Order</h2>
      
      <h3>Customer Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Location:</strong> ${location}</li>
        ${notes ? `<li><strong>Notes:</strong> ${notes}</li>` : ''}
      </ul>
      
      <h3>Order Details:</h3>
      <pre style="white-space: pre-wrap; font-family: monospace;">${orderDetails}</pre>
      
      <h3>Total: KSh ${total}</h3>
      
      <p><em>Please contact the customer to confirm the order and provide payment details.</em></p>
    `;

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'kentank4414@gmail.com',
      to: 'kentank4414@gmail.com',
      subject: `New Water Tank Order - ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
