import { ThreeElements } from '@react-three/fiber';
import { Mesh } from 'three';

import useFloating from '../hooks/useFloating';

function Box(props: ThreeElements['mesh']) {
  const floatingRef = useFloating<Mesh>();

  return (
    <mesh {...props} ref={floatingRef} scale={20}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  );
}

export default Box;
