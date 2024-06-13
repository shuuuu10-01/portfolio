import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import Box from './Box';
import FlameBox from './FlameBox';

function Scene() {
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 750);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        position={[0, 500, 1000]}
      />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      {[...Array(isWide ? 100 : 50)].map((_, index) => {
        return <FlameBox key={index} />;
      })}
      {[...Array(isWide ? 20 : 10)].map((_, index) => {
        return <Box key={index} />;
      })}
    </Canvas>
  );
}
export default Scene;
