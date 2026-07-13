import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ThickEdges } from './OutlineMaterial';

type WallEntityProps = {
    position?: [number, number, number];
    gridX?: number;
    orientation: "horizontal" | "vertical";
};

const verticalRotation: [number, number, number] = [0, 0, 0];
const horizontalRotation: [number, number, number] = [0, -Math.PI / 2, 0];

export function WallEntity({
    position = [0, 0, 0],
    orientation,
}: WallEntityProps) {
    const currRotation =
        orientation === "horizontal"
            ? horizontalRotation
            : verticalRotation;

    return (
        <mesh position={position} rotation={currRotation}>
            <boxGeometry args={[0.25, 1, 2]} />
            <meshStandardMaterial color="#ff0000" />
        </mesh>
    );
}