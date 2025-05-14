import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { House3D } from './House3D';

export default function ThreeScene({ color }) {
  return (
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
  );
}