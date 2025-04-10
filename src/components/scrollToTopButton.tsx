import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import React from 'react';

export function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-red-600 p-3 shadow-lg transition hover:bg-red-700"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-5 w-5 text-white" aria-hidden="true" />
    </button>
  );
}
