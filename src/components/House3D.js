import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

export function House3D({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base of the house */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges scale={1.001} color={color} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.6, 1, 4]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges scale={1.001} color={color} />
      </mesh>

      {/* Door */}
      <mesh position={[0, -0.5, 1.05]}>
        <boxGeometry args={[0.6, 1, 0.1]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges scale={1.001} color={color} />
      </mesh>
    </group>
  );
}