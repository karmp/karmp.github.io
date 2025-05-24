import React from 'react';

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white p-8 rounded-3xl border border-black outline-solid ${className}`}>
      {title && (
        <h3 className="text-2xl font-semibold mb-4 text-black text-left">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}