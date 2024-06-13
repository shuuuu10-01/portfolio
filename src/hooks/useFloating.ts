import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, MutableRefObject } from 'react';
import { LineSegments, Material, Mesh } from 'three';

import { getRandomBetween } from '../utils/number';

const height = window.innerHeight;

function useFloating<T extends LineSegments | Mesh>(): MutableRefObject<T> {
  const meshRef = useRef<T>(null!);
  useFrame(() => {
    meshRef.current.rotation.x += 0.01 * Math.random();
    meshRef.current.rotation.y += 0.01 * Math.random();
    meshRef.current.rotation.z += 0.01 * Math.random();

    meshRef.current.position.y += 1.5;
    const material = meshRef.current.material as Material;

    if (meshRef.current.position.y >= height) {
      meshRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
      meshRef.current.position.y = 0;
      meshRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
      material.opacity = 1;
    }
  });

  useEffect(() => {
    meshRef.current.rotation.x = getRandomBetween(1, 5);
    meshRef.current.rotation.y = getRandomBetween(1, 5);
    meshRef.current.rotation.z = getRandomBetween(1, 5);

    meshRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
    meshRef.current.position.y = height * Math.random();
    meshRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
  }, []);

  return meshRef;
}
export default useFloating;
