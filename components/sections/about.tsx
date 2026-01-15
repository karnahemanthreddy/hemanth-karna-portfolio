"use client";

import { Users, Cpu, TrendingUp } from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";
import { getExperienceSummary } from "@/lib/experience";

export function About() {
  const totalExperience = getExperienceSummary();

  const metrics = [
    { icon: Users, value: "500+", label: "Customers Served" },
    { icon: Cpu, value: "10,000+", label: "Devices Managed" },
    { icon: TrendingUp, value: "40%", label: "Performance Boost" },
  ];

  return (
    <Section id="about" className="bg-muted/30 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn direction="left">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Full Stack Engineer
                <span className="block text-gradient mt-2">
                  Crafting Digital Excellence
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With <span className="text-foreground font-semibold">{totalExperience}</span> of
                hands-on experience, I specialize in architecting and delivering{" "}
                <span className="text-foreground font-semibold">
                  scalable, secure, and high-performance
                </span>{" "}
                web applications using the MEAN stack.
              </p>
              <p>
                My expertise spans across building{" "}
                <span className="text-foreground font-semibold">
                  enterprise-grade systems
                </span>
                , implementing robust microservices architectures, and optimizing
                applications for peak performance and reliability.
              </p>
              <p>
                I thrive on solving complex technical challenges and transforming
                business requirements into elegant, maintainable code that scales.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Enterprise Systems",
                "Microservices",
                "Performance Optimization",
                "Scalable Architecture",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-6">
            <StaggerContainer className="grid gap-4">
              {metrics.map((metric) => (
                <motion.div key={metric.label} variants={fadeInVariant}>
                  <Card className="flex items-center gap-4 hover:border-primary/50">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>

            <Card className="p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Impact-Driven Development
                  </h3>
                  <p className="text-muted-foreground">
                    Consistently delivering solutions that drive business growth,
                    improve user experience, and reduce operational costs.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
