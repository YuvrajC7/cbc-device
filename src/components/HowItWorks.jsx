import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HowItWorks() {
  const containerRef = useRef();

  useEffect(() => {
    const steps = containerRef.current.querySelectorAll('.step-container');
    
    steps.forEach((step) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: step,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <section className="section left-align" ref={containerRef} style={{ paddingBottom: '20vh' }}>
      <h2 className="section-title">Coulter Principle. <br/>Reimagined.</h2>
      
      <div className="step-container">
        <h3 className="step-title">1. Microfluidic Sample Input</h3>
        <p className="section-text">A single drop of blood enters the chip. Cells are branched into specialized lanes where biomarker-tagged antibodies isolate RBCs, WBCs, and platelets.</p>
      </div>

      <div className="step-container">
        <h3 className="step-title">2. Signal Injection & Sensing</h3>
        <p className="section-text">An AD9833 generates a clean 100 kHz sine wave. As cells pass the internal Ag/AgCl electrodes, they displace the electrolyte, creating precise impedance variations without relying on optics.</p>
      </div>

      <div className="step-container">
        <h3 className="step-title">3. Onboard Processing</h3>
        <p className="section-text">The AD620 amplifies tiny voltage differentials, digitized by an ADS1115. Finally, an ESP32 processes the data, filtering noise and classifying cell types based on impedance amplitudes and waveform patterns.</p>
      </div>
    </section>
  );
}