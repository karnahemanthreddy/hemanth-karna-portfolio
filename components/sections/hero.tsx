"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { getExperienceSummary } from "@/lib/experience";

export function Hero() {
    const totalExperience = getExperienceSummary();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            setShowControls(true);
            videoRef.current.muted = !isMuted;
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse dark:opacity-20" />
                <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 dark:opacity-20" />
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000 dark:opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-32">
                {/* Desktop: Two-column layout | Mobile: Stacked */}
                <div className="flex flex-col sm:flex-row gap-12 lg:gap-14 items-center">

                    {/* Left Column - Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <FadeIn delay={0.1}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block"
                            >
                                <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Available for opportunities
                                </span>
                            </motion.div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold tracking-tight">
                                <span className="block">Building Scalable,</span>
                                <span className="block mt-2">
                                    <span className="text-gradient">Secure & High-Performance</span>
                                </span>
                                <span className="block mt-2">Web Applications</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Full Stack Engineer specializing in{" "}
                                <span className="text-foreground font-semibold">MEAN Stack</span>{" "}
                                with {totalExperience} of experience in building enterprise-grade
                                solutions
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                                {[
                                    "Angular",
                                    "Node.js",
                                    "MongoDB",
                                    "AWS",
                                    "Nx Monorepo",
                                    "Keycloak",
                                ].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm font-medium hover:border-primary/50 transition-colors duration-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button onClick={scrollToProjects} size="lg">
                                    View Projects
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>

                                <a
                                    href="/Karna_Hemanth_Full_Stack.pdf"
                                    download="Karna_Hemanth_Full_Stack.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                    >
                                        <Download className="mr-2 h-5 w-5" />
                                        Download Resume
                                    </Button>
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column - Premium Introduction Video */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <FadeIn delay={0.2}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative group cursor-pointer"
                                onClick={handleVideoClick}
                            >
                                {/* Floating animation container */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative"
                                >
                                    {/* Glow effect behind video - Dark mode */}
                                    <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-violet-600/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700" />
                                    </div>

                                    {/* Glow effect behind video - Light mode */}
                                    <div className="absolute inset-0 -z-10 opacity-100 dark:opacity-0 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700" />
                                    </div>

                                    {/* Glassmorphism frame with hover interaction */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            y: -5
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative rounded-3xl overflow-hidden"
                                    >
                                        {/* Glass border/frame */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/5 dark:to-transparent border-2 border-white/30 dark:border-white/20 pointer-events-none z-10" />

                                        {/* Introduction Video */}
                                        <div className="relative w-64 sm:w-80 lg:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-500/10">
                                            <video
                                                ref={videoRef}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                loop
                                                muted={isMuted}
                                                playsInline
                                                preload="metadata"
                                                controls={showControls}
                                                aria-label="Hemanth Karna - Introduction Video"
                                            >
                                                <source src="/Senior Full Stack Developer.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        {/* Click indicator overlay - only shown when muted */}
                                        {isMuted && !showControls && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                            >
                                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
                                                    Tap for sound
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>

                                {/* Decorative floating elements */}
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-2xl -z-10"
                                />
                                <motion.div
                                    animate={{
                                        rotate: -360,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-2xl -z-10"
                                />
                            </motion.div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll indicator - centered below both columns */}
                <FadeIn delay={0.8}>
                    <div className="pt-20 lg:pt-24">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex justify-center"
                        >
                            <div className="w-6 h-10 border-2 border-border rounded-full p-1">
                                <div className="w-1.5 h-3 bg-foreground rounded-full mx-auto" />
                            </div>
                        </motion.div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
