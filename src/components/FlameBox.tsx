import { ThreeElements } from '@react-three/fiber';
import { BoxGeometry, LineSegments } from 'three';

import useFloating from '../hooks/useFloating';
import { getRandomBetween } from '../utils/number';

function FlameBox(props: ThreeElements['lineSegments']) {
  const floatingRef = useFloating<LineSegments>();

  return (
    <lineSegments {...props} ref={floatingRef} scale={getRandomBetween(10, 40)}>
      <edgesGeometry args={[new BoxGeometry(1, 1, 1)]} />
      <lineBasicMaterial color={'#3997d1'} />
    </lineSegments>
  );
}

export default FlameBox;
