# Gmail API Integration Setup

## 🚀 Direct Gmail API Integration (Better than EmailJS!)

### **Why Gmail API is Better:**
- ✅ **Direct Integration**: No third-party services
- ✅ **Full Control**: Complete customization
- ✅ **Higher Limits**: 1 billion requests/day
- ✅ **Better Security**: Google's enterprise-grade security
- ✅ **No Monthly Costs**: Completely free
- ✅ **Professional**: Uses your actual Gmail account

## 📋 Setup Steps (10 minutes)

### **Step 1: Enable Gmail API**

1. **Go to Google Cloud Console**
   - Visit [console.cloud.google.com](https://console.cloud.google.com)
   - Sign in with your Gmail account

2. **Create New Project**
   - Click "Select a project" → "New Project"
   - Name: "Portfolio Contact Form"
   - Click "Create"

3. **Enable Gmail API**
   - Go to "APIs & Services" → "Library"
   - Search for "Gmail API"
   - Click "Gmail API" → "Enable"

### **Step 2: Create OAuth2 Credentials**

1. **Go to Credentials**
   - Navigate to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"

2. **Configure OAuth Consent Screen**
   - Choose "External" user type
   - Fill in required fields:
     - App name: "Portfolio Contact Form"
     - User support email: Your email
     - Developer contact: Your email
   - Save and continue

3. **Create OAuth Client**
   - Application type: "Web application"
   - Name: "Portfolio Contact Form"
   - Authorized redirect URIs: `https://developers.google.com/oauthplayground`
   - Click "Create"
   - **Copy Client ID and Client Secret**

### **Step 3: Get Refresh Token**

1. **Go to OAuth2 Playground**
   - Visit [developers.google.com/oauthplayground](https://developers.google.com/oauthplayground)
   - Click the gear icon (⚙️) in top right
   - Check "Use your own OAuth credentials"
   - Enter your Client ID and Client Secret

2. **Authorize Gmail API**
   - In left panel, find "Gmail API v1"
   - Check `https://mail.google.com/`
   - Click "Authorize APIs"
   - Sign in with your Gmail account
   - Click "Allow"

3. **Get Refresh Token**
   - Click "Exchange authorization code for tokens"
   - **Copy the refresh_token** (you'll need this)

### **Step 4: Configure Environment Variables**

Create `.env.local` in `apps/web` directory:

```bash
# Gmail API Configuration
GMAIL_CLIENT_ID=your_client_id_here
GMAIL_CLIENT_SECRET=your_client_secret_here
GMAIL_REFRESH_TOKEN=your_refresh_token_here
GMAIL_USER=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

### **Step 5: Test the Integration**

1. **Start Development Server**
   ```bash
   pnpm dev
   ```

2. **Test Contact Form**
   - Go to contact section
   - Fill out and submit the form
   - Check your Gmail inbox!

## 📧 What You'll Receive

### **Email Format:**
- **From**: Your Gmail account
- **To**: Your Gmail account (or specified email)
- **Subject**: "Portfolio Contact: [Their Subject]"
- **Content**: Professional HTML formatted email

### **Email Content:**
```html
New Contact Form Submission

Name: John Doe
Email: john@example.com
Subject: Project Inquiry
Message: Hi, I'm interested in working with you...

This message was sent from your portfolio website.
```

## 🔧 Advanced Configuration

### **Custom Email Templates**
Edit the email template in `/api/contact/route.ts`:

```javascript
const emailContent = `
From: ${name} <${email}>
To: ${CONTACT_EMAIL}
Subject: Portfolio Contact: ${subject}
Content-Type: text/html; charset=utf-8

<html>
<body>
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
    ${message.replace(/\n/g, '<br>')}
  </div>
  <hr>
  <p><em>This message was sent from your portfolio website.</em></p>
</body>
</html>
`;
```

### **Multiple Recipients**
To send to multiple emails, update the `CONTACT_EMAIL`:

```bash
CONTACT_EMAIL=primary@email.com,backup@email.com
```

### **Custom Email Styling**
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
- ✅ **OAuth2 Authentication**: Google's secure authentication
- ✅ **Rate Limiting**: Built-in Gmail API limits
- ✅ **Input Validation**: Server-side validation
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Environment Variables**: Secure credential storage

### **Best Practices:**
1. **Never commit `.env.local`** to version control
2. **Use environment variables** for all sensitive data
3. **Validate input** on both client and server
4. **Handle errors gracefully**
5. **Monitor API usage** in Google Cloud Console

## 📊 Monitoring & Analytics

### **Google Cloud Console:**
- View API usage statistics
- Monitor request quotas
- Check error rates
- Set up alerts

### **Gmail Integration:**
- Emails appear in your Gmail inbox
- Full Gmail search capabilities
- Automatic spam filtering
- Mobile notifications

## 🚨 Troubleshooting

### **Common Issues:**

#### **"Invalid credentials"**
- Check if Client ID and Secret are correct
- Verify OAuth consent screen is configured
- Ensure Gmail API is enabled

#### **"Refresh token expired"**
- Re-generate refresh token in OAuth2 Playground
- Update `GMAIL_REFRESH_TOKEN` in `.env.local`

#### **"Insufficient permissions"**
- Check OAuth scopes include `https://mail.google.com/`
- Re-authorize the application

#### **"API not enabled"**
- Ensure Gmail API is enabled in Google Cloud Console
- Check project selection

### **Debug Steps:**
1. Check server logs for detailed error messages
2. Verify environment variables are set correctly
3. Test OAuth2 credentials in playground
4. Check Gmail API quotas in Google Cloud Console

## 💰 Cost Analysis

### **Gmail API Pricing:**
- **Free Tier**: 1 billion requests/day
- **No Monthly Costs**: Completely free
- **No Setup Fees**: Zero cost
- **Enterprise Grade**: Google's infrastructure

### **Comparison with EmailJS:**
| Feature | Gmail API | EmailJS |
|---------|-----------|---------|
| Cost | Free | Free (200/month) |
| Limits | 1B requests/day | 200 emails/month |
| Control | Full control | Limited |
| Security | Enterprise-grade | Third-party |
| Setup | 10 minutes | 5 minutes |

## 🎯 Benefits of Gmail API

### **✅ Professional:**
- Uses your actual Gmail account
- No third-party branding
- Enterprise-grade reliability

### **✅ Scalable:**
- Handles high volume
- No monthly limits
- Google's infrastructure

### **✅ Secure:**
- OAuth2 authentication
- Google's security standards
- No data sharing with third parties

### **✅ Flexible:**
- Full customization
- Multiple recipients
- Rich HTML emails

## 🎉 You're All Set!

Your contact form now uses Gmail API directly! This is the most professional and reliable solution for portfolio contact forms.

### **Next Steps:**
1. Set up Google Cloud Console
2. Enable Gmail API
3. Create OAuth2 credentials
4. Get refresh token
5. Add environment variables
6. Test the form!

Your contact form will now send emails directly through your Gmail account! 📧✨
