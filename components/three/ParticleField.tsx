'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles({ count = 1500 }: { count?: number }) {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const radius = 6 + Math.random() * 14;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            sizes[i] = Math.random() * 1.5 + 0.3;
        }
        return [positions, sizes];
    }, [count]);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={sizes.length}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#5eead4"
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function ParticleField() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        >
            <Particles />
        </Canvas>
    );
}
