import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, MutableRefObject } from 'react';
import { LineSegments, Material, Mesh } from 'three';

const height = window.innerHeight;

function useFloating<T extends LineSegments | Mesh>(): MutableRefObject<T> {
  const meshRef = useRef<T>(null!);
  const heightRandom = Math.random() * 0.5;
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.01;

    meshRef.current.position.y += 1.5;
    const material = meshRef.current.material as Material;

    if (meshRef.current.position.y >= height * (0.7 + heightRandom)) {
      material.opacity -= 0.1; // 透明度を徐々に下げる
    }
    if (material.opacity <= 0) {
      meshRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
      meshRef.current.position.y = 0;
      meshRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
      material.opacity = 1;
    }
  });

  useEffect(() => {
    meshRef.current.rotation.x = random(1, 5);
    meshRef.current.rotation.y = random(1, 5);
    meshRef.current.rotation.z = random(1, 5);

    meshRef.current.position.x = window.innerWidth * (Math.random() - 0.5);
    meshRef.current.position.y = height * Math.random();
    meshRef.current.position.z = window.innerWidth * (Math.random() - 0.5);
  }, []);

  return meshRef;
}
export default useFloating;

function random(min: number, max: number) {
  const rand = Math.floor(min + (max - min + 1) * Math.random());
  return rand;
}
