"use client";

import { useState, useRef } from "react";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import { Label } from "@repo/ui";
import { Textarea } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { theme } from "../../theme";
import { Send, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

// Client-side validation functions
const validateName = (name: string): string | null => {
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 50) return "Name must be less than 50 characters";
  if (!/^[a-zA-Z\s]+$/.test(name)) return "Name can only contain letters and spaces";
  return null;
};

const validateEmail = (email: string): string | null => {
  if (!email) return "Email is required";
  if (email.length > 100) return "Email must be less than 100 characters";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
};

const validateSubject = (subject: string): string | null => {
  if (subject.length < 5) return "Subject must be at least 5 characters";
  if (subject.length > 100) return "Subject must be less than 100 characters";
  return null;
};

const validateMessage = (message: string): string | null => {
  if (message.length < 10) return "Message must be at least 10 characters";
  if (message.length > 1000) return "Message must be less than 1000 characters";
  return null;
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    // Client-side validation
    const errors: Record<string, string> = {};
    
    const nameError = validateName(formData.name);
    if (nameError) errors.name = nameError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
    
    const subjectError = validateSubject(formData.subject);
    if (subjectError) errors.subject = subjectError;
    
    const messageError = validateMessage(formData.message);
    if (messageError) errors.message = messageError;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      
      if (!recaptchaToken) {
        setSubmitStatus('error');
        setErrorMessage('reCAPTCHA verification failed. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
        // Show success toast
        toast.success("Message sent successfully!", {
          description: "I'll get back to you soon.",
          duration: 5000,
        });
      } else {
        // Reset reCAPTCHA on error
        recaptchaRef.current?.reset();
        // Show error toast
        toast.error("Failed to send message", {
          description: result.error || 'Please try again.',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
      // Show error toast
      toast.error("Network error", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className={`${theme.card.base} ${theme.card.hover}`}>
      <CardHeader>
        <CardTitle className={`${theme.text.h4} font-bold`}>Send me a message</CardTitle>
        <p className={`${theme.text.mutedBody}`}>
          I'm always interested in new opportunities and exciting projects.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={fieldErrors.name ? "border-red-500 focus:border-red-500" : ""}
              />
              {fieldErrors.name && (
                <p className="text-sm text-red-600 dark:text-red-400">{fieldErrors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className={fieldErrors.email ? "border-red-500 focus:border-red-500" : ""}
              />
              {fieldErrors.email && (
                <p className="text-sm text-red-600 dark:text-red-400">{fieldErrors.email}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className={fieldErrors.subject ? "border-red-500 focus:border-red-500" : ""}
            />
            {fieldErrors.subject && (
              <p className="text-sm text-red-600 dark:text-red-400">{fieldErrors.subject}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className={fieldErrors.message ? "border-red-500 focus:border-red-500" : ""}
            />
            {fieldErrors.message && (
              <p className="text-sm text-red-600 dark:text-red-400">{fieldErrors.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.message.length}/1000 characters
            </p>
          </div>
          

          {/* reCAPTCHA Component */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            size="invisible"
            theme="light"
          />

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
