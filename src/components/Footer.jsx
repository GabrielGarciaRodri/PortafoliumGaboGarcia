import React from 'react';

export default function Footer({ isDark }) {
  const bg     = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100';
  const muted  = isDark ? 'text-slate-600' : 'text-gray-400';

  return (
    <footer className={`py-7 border-t text-center ${bg} transition-colors duration-300`}>
      <p className={`text-xs ${muted}`}>
        © 2025 Gabriel García Rodríguez. Todos los derechos reservados.
      </p>
    </footer>
  );
}
