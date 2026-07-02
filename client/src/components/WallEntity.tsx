import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ThickEdges } from './OutlineMaterial';

type WallEntityProps = {
    position?: [number, number, number];
    gridx: number;
};

const wallColor = "#ff0000";
const verticalRotation = [0, 0, 0];
const horizontalRotation = [0, -Math.PI / 2, 0];

export function WallEntity({ position = [0, 0, 0], gridx }: WallEntityProps) {
    const cubeRef = useRef<THREE.Mesh>(null);

    let currRotation = verticalRotation;
    if ((gridx % 1) == 0) currRotation = horizontalRotation;

    return(
        <mesh ref={cubeRef} position={position} rotation={currRotation}>
            <boxGeometry args={[0.1,1,2.6]} />
            <meshStandardMaterial color={wallColor} />
        </mesh>
    );
}
