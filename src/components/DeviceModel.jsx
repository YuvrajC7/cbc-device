import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export default function DeviceModel() {
  const modelRef = useRef();
  const coreRef = useRef();

  useLayoutEffect(() => {
    if (!modelRef.current) return;

    // Create a master timeline tied to the scrollbar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-content",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth catching up
      }
    });

    // 1. Initial State (Hero)
    modelRef.current.position.set(0, -1, 0);
    modelRef.current.rotation.set(0.2, -0.5, 0);

    // 2. Scroll to "How It Works" -> Move right, rotate to show the "cartridge"
    tl.to(modelRef.current.position, { x: 3, y: 0, z: 2 }, 0)
      .to(modelRef.current.rotation, { x: 0.5, y: Math.PI / 2, z: 0 }, 0);

    // 3. Scroll to "Manufacturing" -> Move center, abstract rotation
    tl.to(modelRef.current.position, { x: 0, y: -2, z: -2 }, 0.4)
      .to(modelRef.current.rotation, { x: 0, y: Math.PI * 2, z: 0 }, 0.4);

    // 4. Scroll to "Impact" -> Move left, presentational angle
    tl.to(modelRef.current.position, { x: -3, y: -1, z: 1 }, 0.7)
      .to(modelRef.current.rotation, { x: 0.2, y: Math.PI * 2.5, z: 0 }, 0.7);

  }, []);

  // Add a subtle idle floating animation just to make it feel alive
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={modelRef} scale={1.2}>
      <group ref={coreRef}>
        {/* Abstract representation of the Main CBC Analyzer Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial color="#3b82f6" wireframe={true} />
        </mesh>
        
        {/* Abstract representation of the Microfluidic Cartridge */}
        <mesh position={[0, -0.5, 0.6]}>
          <boxGeometry args={[1.5, 1, 0.4]} />
          <meshStandardMaterial color="#fb923c" transparent opacity={0.8} />
        </mesh>

        {/* Abstract representation of the Screen/Dashboard */}
        <mesh position={[0, 0.8, 0.51]}>
          <planeGeometry args={[1.6, 1.2]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
}