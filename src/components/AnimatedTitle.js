'use client';

import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { House3D } from './House3D';
import * as THREE from 'three';

// No need for extend, we can use these directly
const ambientLight = new THREE.AmbientLight();
const pointLight = new THREE.PointLight();

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
      <Suspense fallback={
        <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-900/50 rounded-xl flex items-center justify-center">
          <div className="text-white">Loading 3D Scene...</div>
        </div>
      }>
        <div className="w-64 h-64 sm:w-80 sm:h-80">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <House3D color={color} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
            />
          </Canvas>
        </div>
      </Suspense>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider transition-colors duration-1000 px-4 w-full"
        style={{ 
          fontFamily: 'Akira Expanded, sans-serif',
          color: color
        }}
      >
        summer house party
      </h1>
      <div
        className="text-base sm:text-lg md:text-xl tracking-wider transition-colors duration-1000 px-4 w-full"
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