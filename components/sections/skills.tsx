"use client";

import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import { Section, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/components/ui/motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Angular Material", level: 85 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "Forms", level: 90 },
        { name: "RxJS", level: 85 },
        { name: "NgRx", level: 80 },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "JWT Authentication", level: 85 },
        { name: "Java APIs", level: 70 },
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "Mongoose", level: 90 },
        { name: "CRUD Operations", level: 95 },
        { name: "Indexing", level: 85 },
        { name: "Aggregation Pipelines", level: 90 },
        { name: "PostgreSQL", level: 70 },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud & Serverless",
      icon: Cloud,
      skills: [
        { name: "AWS S3", level: 85 },
        { name: "AWS Lambda (Python)", level: 75 },
        { name: "API Gateway", level: 80 },
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Google Maps API", level: 85 },
        { name: "ApexCharts", level: 80 },
        { name: "Microservices Architecture", level: 85 },
        { name: "Nx Monorepo", level: 90 },
        { name: "Keycloak", level: 85 },
      ],
      gradient: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <Section id="skills">
      <FadeIn>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across the full stack with deep expertise in
            modern technologies
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={category.title} variants={fadeInVariant}>
            <Card className="h-full hover:border-primary/50">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  );
}
