import React from 'react';

export default function ManufacturingFlow() {
  const steps = [
    { title: "Electronic Development", desc: "PCB design and sensor integration." },
    { title: "Microfluidic Integration", desc: "Cartridge architecture and lane printing." },
    { title: "Prototype Assembly", desc: "Housing the modules into a portable chassis." },
    { title: "Data Processing & Classification", desc: "Training algorithms on impedance signatures." },
    { title: "Validation and Documentation", desc: "Clinical trials and regulatory compliance." }
  ];

  return (
    <section className="section" style={{ alignItems: 'flex-end', textAlign: 'left' }}>
      <div style={{ maxWidth: '500px' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Precision Manufacturing</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}