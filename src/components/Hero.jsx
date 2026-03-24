import React from 'react';

export default function Hero() {
  return (
    <section className="section hero-section">
      <h1 
        className="section-title" 
        style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: '1.1' }}
      >
        Portable CBC <br /> Analyzer
      </h1>
      <p className="section-text" style={{ fontSize: '1.5rem', margin: '0 auto' }}>
        A low-cost, real-time blood analysis solution utilizing electrical impedance cytometry.
      </p>
    </section>
  );
}