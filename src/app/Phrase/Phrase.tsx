import { div } from 'framer-motion/client';
import Image from 'next/image';

export default function Phrase({ src }) {
  return (
    <div className='flex items-center px-5 gap-5'>
      <p className='text-[7.5vw]'>Hello world! I'm Tina</p>
      <span className='relative aspect-[4/2] h-[7.5vw] overflow-hidden'>
        <Image
          style={{ objectFit: 'contain' }}
          src={src}
          alt='picture'
          fill
        ></Image>
      </span>
    </div>
  );
}
