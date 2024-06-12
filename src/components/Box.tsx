import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Box(props: ThreeElements['lineSegments']) {
  const meshRef = useRef<THREE.LineSegments>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => (meshRef.current.rotation.x += delta));
  return (
    <lineSegments
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
      <lineBasicMaterial color={hovered ? 'hotpink' : 'orange'} />
    </lineSegments>
  );
}

export default Box;
