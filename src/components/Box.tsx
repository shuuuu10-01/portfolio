import { ThreeElements } from '@react-three/fiber';
import { Mesh } from 'three';

import useFloating from '../hooks/useFloating';
import { getRandomBetween } from '../utils/number';

function Box(props: ThreeElements['mesh']) {
  const { floatingRef, resetPosition } = useFloating<Mesh>();

  return (
    <mesh
      {...props}
      ref={floatingRef}
      scale={getRandomBetween(10, 30)}
      onClick={resetPosition}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'default')}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#3997d1'} />
    </mesh>
  );
}

export default Box;
