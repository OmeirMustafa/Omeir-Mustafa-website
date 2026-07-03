"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface EmbedProps {
  src: string;
  title: string;
  aspectRatio?: '16/9' | '9/16' | '1/1' | '4/5';
  className?: string;
  thumbnail?: string;
  lazy?: boolean;
}

export function Embed({ src, title, aspectRatio = '16/9', className, thumbnail, lazy = true }: EmbedProps) {
  const [isLoaded, setIsLoaded] = useState(!thumbnail);

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-muted border border-border",
        className
      )}
      style={{ aspectRatio }}
    >
      {!isLoaded && thumbnail ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-300" />
          <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-white ml-1" fill="white" />
          </div>
        </button>
      ) : (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading={lazy ? "lazy" : "eager"}
        />
      )}
    </div>
  );
}
