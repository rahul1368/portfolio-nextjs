import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Comprehensive validation schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .transform(name => name.trim()),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters')
    .transform(email => email.toLowerCase().trim()),
  
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters')
    .transform(subject => subject.trim()),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .transform(message => message.trim()),
  
  recaptchaToken: z.string()
    .min(1, 'reCAPTCHA verification required')
});

// Spam detection patterns
const spamPatterns = [
  /viagra|cialis|pharmacy|medication/i,
  /casino|poker|gambling|betting/i,
  /loan|credit|debt|money/i,
  /crypto|bitcoin|investment/i,
  /seo|marketing|promotion/i,
  /free\s+(money|cash|gift)/i,
  /click\s+here|buy\s+now/i,
  /urgent|asap|immediately/i,
  /congratulations|winner|prize/i
];

// Suspicious content detection
const isSpamContent = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  
  // Check for spam patterns
  if (spamPatterns.some(pattern => pattern.test(lowerText))) {
    return true;
  }
  
  // Check for excessive repetition
  const words = lowerText.split(/\s+/);
  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const maxRepetition = Math.max(...Object.values(wordCounts));
  if (maxRepetition > 5) {
    return true;
  }
  
  // Check for excessive caps
  const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
  if (capsRatio > 0.5 && text.length > 20) {
    return true;
  }
  
  // Check for excessive special characters
  const specialCharRatio = (text.match(/[!@#$%^&*()_+={}[\]|\\:";'<>?,./]/g) || []).length / text.length;
  if (specialCharRatio > 0.3) {
    return true;
  }
  
  return false;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input with Zod
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      
      console.warn('Validation failed:', errors);
      return NextResponse.json({ 
        error: 'Invalid input data.',
        details: errors 
      }, { status: 400 });
    }

    const { name, email, subject, message, recaptchaToken } = validationResult.data;

    // Spam content detection
    if (isSpamContent(message) || isSpamContent(subject)) {
      console.warn('Spam content detected:', { name, email, subject: subject.substring(0, 50) });
      return NextResponse.json({ 
        error: 'Your message appears to be spam. Please review and try again.' 
      }, { status: 400 });
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification required.' }, { status: 400 });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error('RECAPTCHA_SECRET_KEY is not configured.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptchaToken,
        remoteip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
      }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', recaptchaResult);
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // Check reCAPTCHA score (0.0 to 1.0, where 1.0 is very likely a good interaction)
    if (recaptchaResult.score < 0.5) {
      console.warn('reCAPTCHA score too low:', recaptchaResult.score);
      return NextResponse.json({ error: 'Suspicious activity detected. Please try again.' }, { status: 400 });
    }

    // Gmail SMTP configuration
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD; // App-specific password
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || GMAIL_USER;

    console.log('Environment variables check:');
    console.log('GMAIL_USER:', GMAIL_USER ? 'Set' : 'Missing');
    console.log('GMAIL_APP_PASSWORD:', GMAIL_APP_PASSWORD ? 'Set' : 'Missing');

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Gmail SMTP credentials are not configured.');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD, // Use app-specific password, not regular password
      },
    });

    console.log('Attempting to send email via Gmail SMTP...');

    // Email content with enhanced headers and formatting
    const mailOptions = {
      from: `"Portfolio Contact Form" <${GMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `🚀 Portfolio Contact: ${subject}`,
      priority: 'high' as const,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'X-Contact-Form': 'Portfolio',
        'X-Contact-Source': 'Website',
        'X-Contact-Type': 'Form-Submission',
        'Importance': 'high',
        'X-Mailer': 'Portfolio Contact Form v1.0'
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                🚀 New Portfolio Contact
              </h1>
              <p style="color: #e8f4fd; margin: 10px 0 0 0; font-size: 14px;">
                You have received a new message from your portfolio website
              </p>
            </div>
            
            <!-- Contact Info Card -->
            <div style="padding: 30px 20px; background-color: #ffffff;">
              <div style="background-color: #f8f9fa; border-left: 4px solid #007bff; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  📋 Contact Information
                </h2>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #007bff; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">NAME</span>
                    <span style="color: #333; font-weight: 500;">${name}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">EMAIL</span>
                    <a href="mailto:${email}" style="color: #007bff; text-decoration: none; font-weight: 500;">${email}</a>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #ffc107; color: #333; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">SUBJECT</span>
                    <span style="color: #333; font-weight: 500;">${subject}</span>
                  </div>
                </div>
              </div>
              
              <!-- Message Content -->
              <div style="background-color: #f5f5f5; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                  💬 Message Content
                </h3>
                <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef;">
                  <p style="white-space: pre-wrap; margin: 0; color: #333; line-height: 1.6; font-size: 14px;">${message}</p>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="display: inline-block; background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px;">
                  📧 Reply to ${name}
                </a>
                <a href="https://your-portfolio-website.com" 
                   style="display: inline-block; background-color: #6c757d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                  🌐 View Portfolio
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; margin: 0; font-size: 12px;">
                <strong>📧 Portfolio Contact Form</strong> | 
                Sent on ${new Date().toLocaleString()} | 
                <span style="color: #28a745;">●</span> High Priority
              </p>
              <p style="color: #adb5bd; margin: 5px 0 0 0; font-size: 11px;">
                This message was automatically sent from your portfolio website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json({ 
      message: 'Email sent successfully!', 
      messageId: result.messageId 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
