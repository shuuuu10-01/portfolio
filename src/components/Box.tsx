import { ThreeElements } from '@react-three/fiber';
import { BoxGeometry, LineSegments } from 'three';

import useFloating from '../hooks/useFloating';

function Box(props: ThreeElements['lineSegments']) {
  const floatingRef = useFloating<LineSegments>();

  return (
    <lineSegments {...props} ref={floatingRef} scale={20}>
      <edgesGeometry args={[new BoxGeometry(1, 1, 1)]} />
      <lineBasicMaterial color={'#fff'} />
    </lineSegments>
  );
}

export default Box;
