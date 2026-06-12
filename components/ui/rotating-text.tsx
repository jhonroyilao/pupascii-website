'use client';

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last';
  loop?: boolean;
  auto?: boolean;
  splitBy?: 'characters' | 'words';
  className?: string;
  mainClassName?: string;
  animatePresenceMode?: 'sync' | 'wait';
}

const RotatingText = forwardRef<any, RotatingTextProps>((props, ref) => {
  const {
    texts,
    rotationInterval = 2500,
    staggerDuration = 0.04,
    staggerFrom = 'last',
    loop = true,
    auto = true,
    splitBy = 'characters',
    className,
    mainClassName,
    animatePresenceMode = 'wait',
  } = props;

  const [index, setIndex] = useState(0);

  const current = texts[index];

  const chars = useMemo(() => {
    if (splitBy === 'words') return current.split(' ');
    return current.split('');
  }, [current, splitBy]);

  const next = useCallback(() => {
    setIndex((prev) => {
      const next = prev + 1;
      if (next >= texts.length) return loop ? 0 : prev;
      return next;
    });
  }, [texts.length, loop]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [auto, next, rotationInterval]);

  const getDelay = (i: number) => {
    if (staggerFrom === 'last') return (chars.length - 1 - i) * staggerDuration;
    return i * staggerDuration;
  };

  return (
    <span className={cn('inline-flex overflow-hidden', mainClassName, className)}>
      <AnimatePresence mode={animatePresenceMode} initial={false}>
        <motion.span
          key={current}
            className="inline-flex"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: getDelay(i),
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;