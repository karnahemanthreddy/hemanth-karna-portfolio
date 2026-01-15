"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/hemanthkarna", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/hemanthkarna", label: "GitHub" },
    { icon: Phone, href: "https://wa.me/919391956902", label: "WhatsApp" },
    { icon: Mail, href: "mailto:hemanthreddykarna@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Hemanth Karna</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer specializing in building scalable,
              secure, and high-performance web applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Hemanth Karna. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-gradient font-semibold">
              Next.js, TypeScript & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
