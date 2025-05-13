'use client';

import { useEffect, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { House3D } from './House3D';
import * as THREE from 'three';

extend({ AmbientLight: THREE.AmbientLight, PointLight: THREE.PointLight });

export function AnimatedTitle() {
  const [isRed, setIsRed] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const color = isRed ? '#DC2626' : '#FFFFFF'; // red-600 or white

  return (
    <div className="flex flex-col items-center space-y-6 sm:space-y-8">
      <div className="w-64 h-64 sm:w-80 sm:h-80">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <House3D color={color} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
        </Canvas>
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wider transition-colors duration-1000 px-4"
        style={{ 
          fontFamily: 'Akira Expanded, sans-serif',
          color: color
        }}
      >
        summer house party
      </h1>
      <div
        className="text-base sm:text-lg md:text-xl tracking-wider transition-colors duration-1000 text-center px-4"
        style={{ 
          fontFamily: 'Akira Expanded, sans-serif',
          color: color
        }}
      >
        <p className="mb-2">Where: 5328 Bundle Flower Court Naperville, IL</p>
        <p className="mb-2">When: Friday May 16th @ 5 PM</p>
        <p className="mb-2">The deets: There will be food,</p>
        <p className="mb-2">no alcohol,</p>
        <p>and we gonna have a good time.</p>
      </div>
    </div>
  );
}