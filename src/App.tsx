import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './App.css';
import Box from './components/Box';

function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Text position={[0, 1, 0]} fontSize={2} color={'#FFF'}>
        HELLO
      </Text>
    </Canvas>
  );
}

export default App;
