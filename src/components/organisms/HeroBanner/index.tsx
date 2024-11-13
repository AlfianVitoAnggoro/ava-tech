'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ImagesSlider } from '@/components/ui/images-slider';
import { FlipWords } from '@/components/ui/flip-words';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export function HeroBanner() {
  const images = [
    '/images/banner/meeting.jpg',
    '/images/banner/meeting-2.jpg',
    '/images/banner/deal.jpg',
  ];
  const wordsTypeWriter = [
    {
      text: 'Build',
      className: 'text-white',
    },
    {
      text: 'awesome',
      className: 'text-white',
    },
    {
      text: 'apps',
      className: 'text-white',
    },
    {
      text: 'with',
      className: 'text-white',
    },
    {
      text: 'AVA-TECH.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <TypewriterEffectSmooth words={wordsTypeWriter} />
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contact Us</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
