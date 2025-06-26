// components/ScrollToTop.tsx  (or .jsx)
'use client';

import { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';          // solid arrow-up icon

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // show the button after the user has scrolled 250 px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 grid place-items-center
        h-12 w-12 rounded-full border-2 shadow-md transition
        ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}
        border-[var(--gh-border)] bg-[var(--gh-bg-secondary)]
        text-[var(--gh-text-primary)] hover:scale-105
      `}
    >
      <IoArrowUp size={22} />
    </button>
  );
}
