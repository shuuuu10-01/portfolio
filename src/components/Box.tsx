import { ThreeElements } from '@react-three/fiber';
import { Mesh } from 'three';

import useFloating from '../hooks/useFloating';
import { getRandomBetween } from '../utils/number';

function Box(props: ThreeElements['mesh']) {
  const floatingRef = useFloating<Mesh>();

  return (
    <mesh {...props} ref={floatingRef} scale={getRandomBetween(10, 30)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#3997d1'} />
    </mesh>
  );
}

export default Box;
