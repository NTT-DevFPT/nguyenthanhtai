'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function DistortedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
        }
        if (wireRef.current) {
            wireRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
            wireRef.current.rotation.z = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
            <group>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.6, 6]} />
                    <MeshDistortMaterial
                        color="#5eead4"
                        attach="material"
                        distort={0.45}
                        speed={1.5}
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#5eead4"
                        emissiveIntensity={0.15}
                    />
                </mesh>
                <mesh ref={wireRef} scale={1.15}>
                    <icosahedronGeometry args={[1.6, 1]} />
                    <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.3} />
                </mesh>
            </group>
        </Float>
    );
}

function OrbitingDots() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
            groupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
        }
    });

    const dots = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 2.6;
        return [Math.cos(angle) * r, Math.sin(angle) * 0.3, Math.sin(angle) * r] as [number, number, number];
    });

    return (
        <group ref={groupRef}>
            {dots.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshBasicMaterial color={i % 2 === 0 ? '#5eead4' : '#22d3ee'} />
                </mesh>
            ))}
        </group>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 3, 3]} intensity={1} color="#5eead4" />
                <pointLight position={[-3, -3, -3]} intensity={0.5} color="#22d3ee" />
                <DistortedSphere />
                <OrbitingDots />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
}
