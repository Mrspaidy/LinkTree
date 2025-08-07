"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default BackgroundBeams; 