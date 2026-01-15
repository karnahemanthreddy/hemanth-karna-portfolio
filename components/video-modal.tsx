"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  posterSrc?: string;
  title?: string;
  subtitle?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  posterSrc = "/my_profile.jpg",
  title = "About Me",
  subtitle = "Full Stack & MEAN Stack Developer",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
              }}
              className="relative w-full max-w-[420px]"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Video Container */}
              <div className="relative">
                {/* Glow effect - Dark mode */}
                <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-violet-600/20 rounded-3xl blur-3xl scale-110" />
                </div>

                {/* Glow effect - Light mode */}
                <div className="absolute inset-0 -z-10 opacity-100 dark:opacity-0 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-white/50 rounded-3xl blur-xl" />
                </div>

                {/* Glass Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/5 dark:to-transparent border-2 border-white/30 dark:border-white/20 shadow-2xl dark:shadow-blue-500/20">
                  {/* Header */}
                  <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
                    <h2
                      id="video-modal-title"
                      className="text-2xl font-bold text-white mb-1"
                    >
                      {title}
                    </h2>
                    {subtitle && (
                      <p className="text-sm text-white/80">{subtitle}</p>
                    )}
                  </div>

                  {/* Video Element - 9:16 Aspect Ratio */}
                  <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover bg-black"
                      controls
                      controlsList="nodownload"
                      preload="none"
                      poster={posterSrc}
                      playsInline
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Bottom Gradient Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
