import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ThickEdges } from './OutlineMaterial';

type WallEntityProps = {
    position?: [number, number, number];
};

const wallColor = "#ff0000";
const verticalRotation = [0, 0, 0];
const horizontalRotation = [0, -Math.PI / 2, 0];

export function WallEntity({ position = [0, 0, 0] }: WallEntityProps) {
    const cubeRef = useRef<THREE.Mesh>(null);

    let currRotation = verticalRotation;
    if ((position[0] % 1) == 0) currRotation = horizontalRotation;

    return(
        <mesh ref={cubeRef} position={position} rotation={currRotation}>
            <boxGeometry args={[0.25,1,2]} />
            <meshStandardMaterial color={wallColor} />
        </mesh>
    );
}
