import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import React, { useRef } from 'react';

const Backdrop = () => {
    const shadows = useRef();
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}
        >
            <RandomizedLight
                amount={1}
                radius={9}
                intensity={2}
                ambient={0.25}
                position={[5, 5, -10]}
            />
            <RandomizedLight
                amount={1}
                radius={5}
                intensity={0.25}
                ambient={2}
                position={[-5, 5, -9]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop