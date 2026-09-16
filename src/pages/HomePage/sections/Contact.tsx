import React, { useState } from "react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-webild-section="contact" id="contact" className="py-20 bg-background">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="px-3.5 py-1 text-sm card rounded-full text-accent font-medium w-fit">
            Get In Touch
          </div>
          <TextAnimation
            text="Start Your Project Today"
            variant="fade-blur"
            gradientText={true}
            tag="h2"
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          />
          <TextAnimation
            text="Tell us about your business goals and we'll craft a custom strategy to help you succeed online."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg text-accent max-w-2xl"
          />
        </div>

        <ScrollReveal variant="slide-up" className="max-w-2xl mx-auto w-full">
          <div className="card rounded-2xl p-6 md:p-10 border border-white/10">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-accent max-w-md">
                  Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-foreground placeholder:text-accent/50 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-foreground placeholder:text-accent/50 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-foreground placeholder:text-accent/50 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-foreground placeholder:text-accent/50 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="primary-button w-full py-3.5 rounded-lg font-medium text-center transition-all cursor-pointer mt-2"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}