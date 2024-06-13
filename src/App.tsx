import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './App.css';
import Box from './components/Box';
import FlameBox from './components/FlameBox';

function App() {
  return (
    <div className="container">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          fov={45}
          aspect={window.innerWidth / window.innerHeight}
          position={[0, 500, 1000]}
        />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        {[...Array(100)].map((_, index) => {
          return <FlameBox key={index} />;
        })}
        {[...Array(25)].map((_, index) => {
          return <Box key={index} />;
        })}
      </Canvas>
    </div>
  );
}

export default App;
