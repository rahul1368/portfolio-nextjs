# Nodemailer + Gmail SMTP Setup

## 🚀 Simple Gmail SMTP Integration (Much Easier!)

### **Why Nodemailer is Better:**
- ✅ **No OAuth2 Complexity**: Uses simple SMTP authentication
- ✅ **Easy Setup**: Just need Gmail app password
- ✅ **Reliable**: Direct SMTP connection
- ✅ **No API Limits**: Standard email sending
- ✅ **Works Immediately**: No complex configuration

## 📋 Setup Steps (5 minutes)

### **Step 1: Enable 2-Factor Authentication**

1. **Go to Google Account Settings**
   - Visit [myaccount.google.com](https://myaccount.google.com)
   - Sign in with your Gmail account

2. **Enable 2-Factor Authentication**
   - Go to "Security" → "2-Step Verification"
   - Follow the setup process
   - **This is required for app passwords**

### **Step 2: Generate App-Specific Password**

1. **Go to App Passwords**
   - In Google Account, go to "Security" → "App passwords"
   - You might need to sign in again

2. **Create New App Password**
   - Select app: "Mail"
   - Select device: "Other (custom name)"
   - Enter name: "Portfolio Contact Form"
   - Click "Generate"

3. **Copy the App Password**
   - **Important**: Copy the 16-character password (like `abcd efgh ijkl mnop`)
   - **Save it immediately** - you can't see it again!

### **Step 3: Update Environment Variables**

Update your `.env.local` file:

```bash
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=your-email@gmail.com
```

**Important Notes:**
- `GMAIL_USER`: Your Gmail address
- `GMAIL_APP_PASSWORD`: The 16-character app password (no spaces)
- `CONTACT_EMAIL`: Where to send the emails (usually same as GMAIL_USER)

### **Step 4: Test the Integration**

1. **Restart your dev server**:
   ```bash
   # Stop the server (Ctrl+C)
   pnpm dev
   ```

2. **Test the contact form**:
   - Go to your portfolio
   - Fill out the contact form
   - Submit and check for success message

3. **Check your Gmail inbox**:
   - Look for email with subject: "Portfolio Contact: [Test Subject]"
   - Email should be professionally formatted

## 📧 What You'll Receive

### **Email Format:**
- **From**: Your Gmail account
- **To**: Your Gmail account
- **Subject**: "Portfolio Contact: [Their Subject]"
- **Reply-To**: The person who filled the form
- **Content**: Professional HTML formatted email

### **Email Content:**
```html
New Contact Form Submission

Name: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi, I'm interested in working with you on a new project...

This message was sent from your portfolio website.
```

## 🔧 Advanced Configuration

### **Multiple Recipients**
To send to multiple emails, update `CONTACT_EMAIL`:

```bash
CONTACT_EMAIL=primary@email.com,backup@email.com
```

### **Custom Email Templates**
Edit the HTML template in `/api/contact/route.ts`:

```javascript
html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px;">
      ${message}
    </div>
  </div>
`
```

### **Custom Styling**
Add CSS styling to make emails look professional:

```html
<style>
  .email-container {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .header {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
  }
  .message-box {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    margin: 10px 0;
  }
</style>
```

## 🛡️ Security Features

### **Built-in Security:**
- ✅ **App-Specific Passwords**: More secure than regular passwords
- ✅ **2FA Required**: Must have 2-factor authentication enabled
- ✅ **Input Validation**: Server-side validation
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Environment Variables**: Secure credential storage

### **Best Practices:**
1. **Never commit `.env.local`** to version control
2. **Use app-specific passwords** (not regular passwords)
3. **Enable 2FA** on your Google account
4. **Validate input** on both client and server
5. **Handle errors gracefully**

## 📊 Monitoring & Analytics

### **Gmail Integration:**
- Emails appear in your Gmail inbox
- Full Gmail search capabilities
- Automatic spam filtering
- Mobile notifications
- Gmail labels and filters

### **Debug Logs:**
Check your terminal for debug information:
```
Environment variables check:
GMAIL_USER: Set
GMAIL_APP_PASSWORD: Set
Attempting to send email via Gmail SMTP...
Email sent successfully: <message-id>
```

## 🚨 Troubleshooting

### **Common Issues:**

#### **"Invalid login"**
- **Solution**: Check if app password is correct
- Make sure 2FA is enabled
- Verify Gmail address is correct

#### **"App password not working"**
- **Solution**: Generate a new app password
- Make sure you're using the 16-character password
- No spaces in the password

#### **"2FA not enabled"**
- **Solution**: Enable 2-factor authentication first
- Then generate app password

#### **"Environment variables not loaded"**
- **Solution**: Restart the dev server
- Check `.env.local` file format
- No spaces around `=`

### **Debug Steps:**
1. Check if 2FA is enabled
2. Generate new app password
3. Verify environment variables
4. Check server logs
5. Test with simple email

## 💰 Cost Analysis

### **Gmail SMTP Pricing:**
- **Free**: Unlimited emails
- **No Monthly Costs**: Completely free
- **No Setup Fees**: Zero cost
- **Gmail Infrastructure**: Google's reliable servers

### **Comparison with Gmail API:**
| Feature | Gmail SMTP | Gmail API |
|---------|------------|-----------|
| Setup Time | 5 minutes | 15+ minutes |
| Complexity | Simple | Complex |
| OAuth2 Required | No | Yes |
| App Password | Yes | No |
| Reliability | High | High |
| Limits | None | API limits |

## 🎯 Benefits of Nodemailer + Gmail SMTP

### **✅ Simple:**
- No OAuth2 complexity
- Just app password needed
- Works immediately

### **✅ Reliable:**
- Direct SMTP connection
- Gmail's infrastructure
- No API rate limits

### **✅ Secure:**
- App-specific passwords
- 2FA required
- No OAuth2 vulnerabilities

### **✅ Flexible:**
- Custom email templates
- Multiple recipients
- Rich HTML emails

## 🎉 You're All Set!

Your contact form now uses Gmail SMTP directly! This is the simplest and most reliable solution.

### **Next Steps:**
1. Enable 2FA on your Google account
2. Generate app-specific password
3. Update environment variables
4. Test the form!

Your contact form will now send emails directly through your Gmail account! 📧✨

## 🔄 Migration from Gmail API

If you were using Gmail API before:

1. **Remove old environment variables**:
   ```bash
   # Remove these from .env.local
   # GMAIL_CLIENT_ID=...
   # GMAIL_CLIENT_SECRET=...
   # GMAIL_REFRESH_TOKEN=...
   ```

2. **Add new environment variables**:
   ```bash
   # Add these to .env.local
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   CONTACT_EMAIL=your-email@gmail.com
   ```

3. **Restart the server** and test!

The migration is complete! 🚀
