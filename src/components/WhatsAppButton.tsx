'use client';

import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section:first-of-type');

      if (!heroSection) {
        setVisible(window.scrollY > 600);
        return;
      }

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setVisible(heroBottom < window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          initial={reduced ? false : {opacity: 0, scale: 0.86}}
          animate={{opacity: 1, scale: 1}}
          exit={reduced ? {opacity: 0} : {opacity: 0, scale: 0.86}}
          transition={{duration: reduced ? 0 : 0.24}}
          className="group fixed end-6 bottom-6 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full text-cream transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.04] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
          aria-label="Contact us on WhatsApp"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-base shadow-[0_7px_18px_rgba(7,32,25,0.22)] transition-[background-color,box-shadow] duration-200 group-hover:bg-emerald-lit group-hover:shadow-[0_9px_22px_rgba(7,32,25,0.28)]">
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.93 7.93 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607M7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.099-.133.197-.513.646-.627.775-.116.133-.232.15-.43.05-.197-.099-.836-.308-1.592-.985-.59-.525-.986-1.173-1.102-1.37-.116-.198-.013-.305.086-.404.09-.088.197-.23.296-.345.1-.116.133-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.075-.61-1.47-.16-.389-.323-.335-.445-.341-.114-.007-.247-.007-.379-.007s-.346.05-.527.248c-.182.198-.692.677-.692 1.654s.71 1.916.81 2.049c.098.132 1.398 2.137 3.39 2.997.474.204.842.326 1.129.418.475.152.907.129 1.25.079.38-.058 1.171-.48 1.338-.943.164-.463.164-.86.114-.943-.05-.082-.182-.132-.38-.23" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
