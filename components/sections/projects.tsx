"use client";

import { ExternalLink, Award } from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";

export function Projects() {
  const projects = [
    {
      title: "Mira – Maintenance Information Reporting Application",
      company: "Kyra Solutions",
      period: "Mar 2025 - Present",
      description:
        "Enterprise-grade maintenance management system for reviewing and managing image metadata with comprehensive audit capabilities and role-based access control.",
      achievements: [
        "Implemented Settings and User Management modules with role-based access control",
        "Developed and enhanced Angular UI components for image review screens, filters, and dashboards",
        "Integrated frontend with Node.js and Java-based REST APIs for metadata and audit management",
        "Improved application stability and maintainability through clean architecture",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "Java APIs",
        "PostgreSQL",
        "Keycloak",
        "AWS",
        "Nx",
      ],
      type: "Enterprise Application",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "JioHumsafar - Vehicle Tracking & Fleet Management",
      company: "Asset Telematics Private Limited",
      period: "Oct 2021 - Feb 2025",
      description:
        "Real-time vehicle monitoring system enabling live notifications, fleet management, and comprehensive tracking for 10,000+ IoT devices with advanced analytics capabilities.",
      achievements: [
        "Developed real-time vehicle monitoring system with live notifications",
        "Optimized MongoDB queries improving system response time by 40%",
        "Successfully managed 500+ customers and 10,000+ IoT devices",
        "Collaborated with 60+ cross-functional team members across multiple Agile sprints",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      type: "Fleet Management",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <Section id="projects">
      <FadeIn>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering enterprise-scale solutions with measurable business impact
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeIn>

      <StaggerContainer className="space-y-8">
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeInVariant}>
            <Card className="hover:border-primary/50 overflow-hidden group">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <Badge variant="primary" className="mb-3">
                      {project.type}
                    </Badge>
                    <h3 className="text-2xl font-bold group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 dark:text-green-400 mt-0.5">
                            ✓
                          </span>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
