import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const form = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalcode: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    else if (formData.name.trim().length < 2)
      tempErrors.name = "Name must be at least 2 characters.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }

    if (
      formData.phone.trim() &&
      !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)
    ) {
      tempErrors.phone = "Phone number is invalid.";
    }

    if (!formData.postalcode.trim())
      tempErrors.postalcode = "postalcode is required.";
    else if (formData.postalcode.trim().length < 5)
      tempErrors.postalcode = "Enter your full postal code.";

    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10)
      tempErrors.message = "Message must be at least 10 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "⚠️ Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_y1d7t7k";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_thmxb2t";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "wzFyrkC22IDRUXQlO";

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials not configured in .env file.");
      toast({
        title: "🚧 EmailJS Not Configured",
        description:
          "The contact form is not yet active. Please contact support directly.",
        variant: "destructive",
        duration: 7000,
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          toast({
            title: "📧 Message Sent!",
            description:
              "Thank you for your message. We'll get back to you soon!",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            postalcode: "",
            message: "",
          });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS send error:", error);
          toast({
            title: "📨 Sending Failed",
            description:
              "Something went wrong. Please try again later or contact us directly.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200";
  const errorClass = "text-destructive text-xs mt-1";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="bg-card rounded-xl p-6 md:p-8 shadow-xl animate-pulse-glow"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Send Us a Message
      </h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="John Doe"
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
          <div>
            <label
              htmlFor="postalcode"
              className="block text-xs font-medium text-muted-foreground mb-1.5"
            >
              Zip code *
            </label>
            <input
              type="text"
              name="postalcode"
              id="postalcode"
              value={formData.postalcode}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter your zip code"
            />
            {errors.postalcode && (
              <p className={errorClass}>{errors.postalcode}</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-muted-foreground mb-1.5"
          >
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClass} resize-none min-h-[100px]`}
            placeholder="Your message here..."
          ></textarea>
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </div>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
