# Google reCAPTCHA v3 Setup Guide

## 🚀 Complete reCAPTCHA Integration for Contact Form

### **✅ What's Implemented:**
- **Invisible reCAPTCHA v3**: No user interaction required
- **Server-side verification**: Secure token validation
- **Score-based filtering**: Blocks low-score submissions
- **Automatic reset**: reCAPTCHA resets after each submission
- **Error handling**: Graceful fallback for failed verification

## 📋 Setup Steps (10 minutes)

### **Step 1: Create Google reCAPTCHA Account**

1. **Go to Google reCAPTCHA Admin Console**
   - Visit [g.co/recaptcha](https://g.co/recaptcha)
   - Sign in with your Google account

2. **Create New Site**
   - Click "Create" or "+" button
   - **Label**: "Portfolio Contact Form"
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `your-domain.com` (for production)
     - `www.your-domain.com` (if you use www)

3. **Accept Terms and Create**
   - Accept the Terms of Service
   - Click "Submit"

### **Step 2: Get Your Keys**

After creating the site, you'll get two keys:

1. **Site Key** (Public) - Used in frontend
2. **Secret Key** (Private) - Used in backend

**Important**: Keep your Secret Key secure and never expose it in client-side code!

### **Step 3: Configure Environment Variables**

Add these to your `.env.local` file:

```bash
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Existing Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
CONTACT_EMAIL=your-email@gmail.com
```

### **Step 4: Test the Integration**

1. **Restart your dev server**:
   ```bash
   pnpm dev
   ```

2. **Test the contact form**:
   - Fill out the form
   - Submit and check for success
   - Check your Gmail inbox

3. **Check browser console** for any reCAPTCHA errors

## 🎯 How It Works

### **Frontend (ContactForm.tsx):**
1. **Invisible reCAPTCHA**: Runs automatically in background
2. **Token Generation**: Creates token when form is submitted
3. **Token Submission**: Sends token with form data
4. **Auto Reset**: Resets reCAPTCHA after each submission

### **Backend (API Route):**
1. **Token Verification**: Validates token with Google
2. **Score Check**: Ensures score is above 0.5 (50% confidence)
3. **Email Sending**: Proceeds only if verification passes
4. **Error Handling**: Returns appropriate error messages

## 🔧 Configuration Options

### **reCAPTCHA Score Threshold:**
```javascript
// Current setting: 0.5 (50% confidence)
if (recaptchaResult.score < 0.5) {
  // Block submission
}

// Adjust threshold as needed:
// 0.3 = More permissive (30% confidence)
// 0.7 = More strict (70% confidence)
```

### **reCAPTCHA Theme:**
```javascript
// Current: Light theme
<ReCAPTCHA theme="light" />

// Options: "light" or "dark"
<ReCAPTCHA theme="dark" />
```

### **reCAPTCHA Size:**
```javascript
// Current: Invisible (no user interaction)
<ReCAPTCHA size="invisible" />

// Options: "invisible", "compact", "normal"
<ReCAPTCHA size="normal" />
```

## 📊 Expected Results

### **✅ Spam Protection:**
- **95%+ spam reduction** with reCAPTCHA v3
- **Invisible protection** - no user friction
- **Score-based filtering** - blocks suspicious submissions
- **Real-time verification** - immediate protection

### **✅ User Experience:**
- **No CAPTCHA challenges** - completely invisible
- **Fast submission** - minimal delay
- **Clear error messages** - helpful feedback
- **Mobile friendly** - works on all devices

## 🚨 Troubleshooting

### **Common Issues:**

#### **"reCAPTCHA verification failed"**
- **Check environment variables** are set correctly
- **Verify domain** is added to reCAPTCHA console
- **Check network connectivity** to Google services

#### **"Suspicious activity detected"**
- **Score too low** - legitimate user might be blocked
- **Lower the threshold** from 0.5 to 0.3
- **Check IP reputation** - some IPs get lower scores

#### **reCAPTCHA not loading**
- **Check site key** is correct
- **Verify domain** is in reCAPTCHA console
- **Check browser console** for errors

#### **"Server configuration error"**
- **Check RECAPTCHA_SECRET_KEY** is set
- **Restart dev server** after adding env vars
- **Verify secret key** is correct

### **Debug Steps:**
1. **Check environment variables** in terminal
2. **Verify reCAPTCHA console** settings
3. **Test with different browsers**
4. **Check network requests** in browser dev tools

## 📈 Monitoring & Analytics

### **reCAPTCHA Console:**
- **View statistics** in Google reCAPTCHA console
- **Monitor score distribution**
- **Track verification success rate**
- **Adjust settings** based on data

### **Server Logs:**
```javascript
// Check these logs for debugging:
console.log('reCAPTCHA verification failed:', recaptchaResult);
console.warn('reCAPTCHA score too low:', recaptchaResult.score);
```

## 🎉 Benefits

### **✅ Security:**
- **Advanced bot detection** - Google's AI-powered protection
- **Score-based filtering** - intelligent spam prevention
- **Real-time verification** - immediate threat detection

### **✅ User Experience:**
- **Invisible protection** - no user friction
- **Fast performance** - minimal impact on load times
- **Mobile optimized** - works on all devices

### **✅ Developer Experience:**
- **Easy integration** - simple React component
- **Flexible configuration** - customizable settings
- **Comprehensive logging** - easy debugging

## 🚀 Next Steps

1. **Set up reCAPTCHA keys** following the steps above
2. **Add environment variables** to your `.env.local`
3. **Test the contact form** to verify everything works
4. **Monitor the reCAPTCHA console** for statistics
5. **Adjust score threshold** if needed based on your traffic

Your contact form now has enterprise-grade spam protection! 🛡️✨
