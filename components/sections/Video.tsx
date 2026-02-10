"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoProps {
  videoSrc?: string;
  poster?: string;
}

export default function Video({ videoSrc, poster }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video bg-ui-gray-light rounded-2xl overflow-hidden">
          {videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              <button
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/90 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 md:w-12 md:h-12 text-gray-700 fill-gray-700" />
                  ) : (
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-gray-700 fill-gray-700 ml-1" />
                  )}
                </div>
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center cursor-pointer group">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-gray-500 fill-gray-500 ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* CTA Text */}
        <p className="text-center mt-6 text-md font-normal text-text-body">
          Get A Free 15 Min Demo · See if it fits your business
        </p>
      </div>
    </section>
  );
}
