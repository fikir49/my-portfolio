"use client";

import Image from 'next/image';

interface MockupFrameProps {
  imageSrc: string;
  imageAlt: string;
  type: 'iphone' | 'macbook';
}

export function MockupFrame({ imageSrc, imageAlt, type }: MockupFrameProps) {
  if (type === 'iphone') {
    return (
      <div className="flex justify-center">
        <div className="relative w-80">
          {/* iPhone Body */}
          <div className="bg-black rounded-3xl p-3 shadow-2xl" style={{
            boxShadow: '0 20px 60px rgba(0, 255, 65, 0.15), 0 0 30px rgba(0, 255, 65, 0.1)'
          }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
            
            {/* Screen */}
            <div className="bg-black rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={320}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute top-2 left-8 w-1/3 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    );
  }

  // MacBook mockup
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">
        {/* Bezel */}
        <div className="bg-gradient-to-b from-black to-tech-dark rounded-2xl p-2" style={{
          boxShadow: '0 20px 60px rgba(0, 255, 65, 0.15), 0 0 30px rgba(0, 255, 65, 0.1)'
        }}>
          {/* Screen */}
          <div className="bg-black rounded-lg overflow-hidden border border-tech-border">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Stand */}
        <div className="flex justify-center mt-2">
          <div className="w-48 h-2 bg-gradient-to-r from-tech-dark via-tech-highlight to-tech-dark rounded-full" />
        </div>
        
        {/* Base */}
        <div className="flex justify-center mt-1">
          <div className="w-64 h-1 bg-gradient-to-r from-tech-surface via-tech-border to-tech-surface rounded-full" />
        </div>
        
        {/* Shine effect */}
        <div className="absolute top-12 left-0 right-0 w-1/3 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none mx-auto" />
      </div>
    </div>
  );
}
