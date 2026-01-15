"use client";

import {
  Boxes,
  GitBranch,
  Shield,
  Workflow,
  Server,
  Cloud,
} from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";

export function Architecture() {
  const architectureSkills = [
    {
      icon: Boxes,
      title: "Nx Monorepo Architecture",
      description:
        "Expert in structuring large-scale applications using Nx, enabling code sharing, consistent tooling, and streamlined development workflows.",
      benefits: ["40% faster builds", "Improved code reusability", "Consistent DX"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Workflow,
      title: "Microservices Design",
      description:
        "Architecting scalable microservices with clear domain boundaries, implementing event-driven communication and ensuring fault tolerance.",
      benefits: ["Enhanced scalability", "Independent deployment", "Better fault isolation"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Keycloak Authentication",
      description:
        "Implementing enterprise-grade authentication and authorization using Keycloak, supporting SSO, OAuth 2.0, and role-based access control.",
      benefits: ["500+ users managed", "SSO implementation", "Fine-grained permissions"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Server,
      title: "API Gateway Pattern",
      description:
        "Designing robust API gateways for routing, load balancing, rate limiting, and centralized authentication across microservices.",
      benefits: ["Centralized routing", "Enhanced security", "Request throttling"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Infrastructure",
      description:
        "Leveraging AWS services (S3, Lambda, EC2) for building scalable, cost-effective cloud solutions with automated deployment pipelines.",
      benefits: ["Serverless functions", "Scalable storage", "Cost optimization"],
      gradient: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <Section id="architecture" className="bg-muted/30">
      <FadeIn>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Architecture & System Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building robust, scalable systems with enterprise-grade architecture
            patterns
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectureSkills.map((skill) => (
          <motion.div key={skill.title} variants={fadeInVariant}>
            <Card className="h-full hover:border-primary/50 group">
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${skill.gradient} bg-opacity-10 border border-primary/20 inline-block group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {skill.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4}>
        <Card className="mt-12 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">
              Senior-Level System Thinking
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With deep expertise in architectural patterns, I design systems that
              not only meet current requirements but are built to evolve. My
              approach emphasizes <span className="text-foreground font-semibold">
                scalability, maintainability, and operational excellence
              </span>, ensuring long-term success and adaptability to changing business needs.
            </p>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
