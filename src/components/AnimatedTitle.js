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
    <div className="flex flex-col items-center">
      <div className="w-80 h-80">
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
        className="text-7xl tracking-wider transition-colors duration-1000"
        style={{ 
          fontFamily: 'Akira Expanded, sans-serif',
          color: color
        }}
      >
        summer house party
      </h1>
      <h1
        className="text-xl tracking-wider transition-colors duration-1000"
        style={{ 
          fontFamily: 'Akira Expanded, sans-serif',
          color: color
        }}
      >
        Where: 5328 Bundle Flower Court Naperville, IL
        <br />
        When: Friday May 16th @ 5 PM
        <br />
        The deets: There will be food, <br></br>no alcohol, <br></br> and we gonna have a good time.
      </h1>
    </div>
  );
}