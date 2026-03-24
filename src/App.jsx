import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DeviceModel from './components/DeviceModel';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ManufacturingFlow from './components/ManufacturingFlow';
import Impact from './components/Impact';

import './styles.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      {/* Background 3D Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={['#050914']} />
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          
          <DeviceModel />
          
          {/* Clinical lighting environment */}
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 0, 1]}>
              <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
              <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            </group>
          </Environment>
        </Canvas>
      </div>

      {/* Scrolling DOM Content */}
      <div className="scroll-content">
        <Hero />
        <HowItWorks />
        <ManufacturingFlow />
        <Impact />
      </div>
    </>
  );
}