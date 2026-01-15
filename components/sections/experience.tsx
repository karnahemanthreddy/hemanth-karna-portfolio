"use client";

import { Briefcase, Calendar } from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";
import { experienceData, formatDateRange, getExperienceSummary } from "@/lib/experience";

export function Experience() {
  const totalExperience = getExperienceSummary();

  return (
    <Section id="experience" className="bg-muted/30">
      <FadeIn>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {totalExperience} of building impactful solutions for enterprise clients
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeIn>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

        <StaggerContainer className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeInVariant}
              className={`relative ${
                index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"
              } lg:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block" />

              <Card className="hover:border-primary/50">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className={index % 2 === 0 ? "lg:text-right lg:ml-auto" : ""}>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 flex-wrap">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDateRange(exp.startDate, exp.endDate)}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <Badge variant="primary" className="shrink-0">
                        Current
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && (
                    <div className="space-y-3 pt-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-1.5">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
