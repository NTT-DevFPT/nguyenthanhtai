'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type Shape = 'sphere' | 'torus' | 'octahedron' | 'box';

function ShapeMesh({ shape, color }: { shape: Shape; color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (wireRef.current) {
            wireRef.current.rotation.x = -state.clock.elapsedTime * 0.15;
            wireRef.current.rotation.y = -state.clock.elapsedTime * 0.25;
        }
    });

    const geometry = () => {
        switch (shape) {
            case 'sphere':
                return <icosahedronGeometry args={[1.2, 2]} />;
            case 'torus':
                return <torusKnotGeometry args={[0.9, 0.3, 100, 16]} />;
            case 'octahedron':
                return <octahedronGeometry args={[1.3, 0]} />;
            case 'box':
                return <boxGeometry args={[1.6, 1.6, 1.6]} />;
        }
    };

    return (
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
            <group>
                <mesh ref={meshRef}>
                    {geometry()}
                    <meshStandardMaterial
                        color={color}
                        roughness={0.25}
                        metalness={0.85}
                        emissive={color}
                        emissiveIntensity={0.2}
                    />
                </mesh>
                <mesh ref={wireRef} scale={1.18}>
                    {geometry()}
                    <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
                </mesh>
            </group>
        </Float>
    );
}

export default function ProjectShape({ shape, color }: { shape: Shape; color: string }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[3, 3, 3]} intensity={1.2} color={color} />
                <pointLight position={[-3, -3, -3]} intensity={0.6} color="#ffffff" />
                <ShapeMesh shape={shape} color={color} />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
}
