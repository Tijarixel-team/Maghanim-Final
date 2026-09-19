'use client';

import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[id=""][class*="z-20"]') ||
                         document.querySelector('section:first-of-type');

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
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -20}}
          transition={{duration: 0.3}}
          className="fixed start-6 bottom-6 z-40 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            <button className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110">
              <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006c-1.105 0-2.153.474-2.851 1.302l-.18.223c-.625.767-1.004 1.755-1.004 2.782 0 2.192 1.784 3.975 3.975 3.975h.005c1.046 0 2.04-.408 2.778-1.146l.173-.173c.624-.625 1.004-1.504 1.004-2.656 0-2.192-1.784-3.975-3.975-3.975zm6.374-1.138C15.727 4.076 13.904 3.23 12 3.23c-3.859 0-7 3.14-7 7 0 1.24.31 2.411.857 3.433L3.83 20.97a1 1 0 001.232 1.233l7.28-1.885A6.999 6.999 0 0012 21.23c3.859 0 7-3.14 7-7 0-1.905-.846-3.727-2.325-4.945z" />
              </svg>
            </button>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
