"use client";

import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hemanthreddykarna@gmail.com",
      href: "mailto:hemanthreddykarna@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hemanthkarna",
      href: "https://linkedin.com/in/hemanthkarna",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
    },
  ];

  return (
    <Section id="contact">
      <FadeIn>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to challenging engineering problems and scalable product building
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <FadeIn direction="left" delay={0.2}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently{" "}
                <span className="text-foreground font-semibold">
                  open to new opportunities
                </span>{" "}
                and would love to hear about exciting projects, collaborations, or
                full-time positions where I can contribute my expertise in building
                scalable, high-performance applications.
              </p>
            </div>

            <StaggerContainer className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={fadeInVariant}
                  className="block"
                >
                  <Card className="flex items-center gap-4 hover:border-primary/50 cursor-pointer group">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors break-all">
                        {info.value}
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </StaggerContainer>

            <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">What I&apos;m Looking For</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    <span>
                      Challenging technical problems requiring senior-level expertise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    <span>
                      Opportunities to architect and build scalable systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    <span>
                      Teams that value engineering excellence and innovation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    <span>
                      Remote or Hyderabad-based roles with growth potential
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.3}>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
