import { motion, useTransform } from 'framer-motion';

import Phrase from '@/app/Phrase/Phrase';

export default function Slide({ src, left, progress, direction }) {
  const dir = direction === 'left' ? -1 : 1;
  const x = useTransform(progress, [0, 1], [250 * dir, -250 * dir]);
  return (
    <motion.div style={{ left, x }} className='relative flex whitespace-nowrap'>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}
