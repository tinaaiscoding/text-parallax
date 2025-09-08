'use client';

import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

import Pic1 from '../../../../public/images/photo-1.png';
import Pic2 from '../../../../public/images/photo-2.png';
import Pic3 from '../../../../public/images/photo-3.png';
import Slide from '../Slide/Slide';

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container}>
      <div className='h-screen'>Scroll down</div>
      <div>
        <Slide src={Pic1} left={'-50%'} progress={scrollYProgress} direction="left"></Slide>
        <Slide src={Pic2} left={'-15%'} progress={scrollYProgress} direction="right"></Slide>
        <Slide src={Pic3} left={'-35%'} progress={scrollYProgress}direction="left"></Slide>
      </div>

      <div className='flex h-screen items-end'>Bye</div>
    </main>
  );
}
