import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, MutableRefObject } from 'react';
import { LineSegments, Material, Mesh } from 'three';

import { getRandomBetween } from '../utils/number';

const height = window.innerHeight;

function useFloating<T extends LineSegments | Mesh>(): {
  floatingRef: MutableRefObject<T>;
  resetPosition: () => void;
} {
  const floatingRef = useRef<T>(null!);
  useFrame(() => {
    floatingRef.current.rotation.x += 0.01 * Math.random();
    floatingRef.current.rotation.y += 0.01 * Math.random();
    floatingRef.current.rotation.z += 0.01 * Math.random();

    floatingRef.current.position.y += 1;

    if (floatingRef.current.position.y >= height) {
      resetPosition();
    }
  });

  useEffect(() => {
    floatingRef.current.rotation.x = getRandomBetween(1, 5);
    floatingRef.current.rotation.y = getRandomBetween(1, 5);
    floatingRef.current.rotation.z = getRandomBetween(1, 5);

    floatingRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
    floatingRef.current.position.y = height * Math.random();
    floatingRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
  }, []);

  function resetPosition() {
    const material = floatingRef.current.material as Material;
    floatingRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
    floatingRef.current.position.y = 0;
    floatingRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
    material.opacity = 1;
  }

  return { floatingRef, resetPosition };
}
export default useFloating;
