import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ThickEdges } from './OutlineMaterial';

type WallEntityProps = {
    position?: [number, number, number];
    gridx?: number;
    orientation: "horizontal" | "vertical";
};

const verticalRotation: [number, number, number] = [0, 0, 0];
const horizontalRotation: [number, number, number] = [0, -Math.PI / 2, 0];

export function WallEntity({
    position = [0, 0, 0],
    gridx,
    orientation
}: WallEntityProps) {
    orientation =
        gridx % 1 === 0
            ? "horizontal"
            : "vertical";

    const currRotation =
        orientation === "horizontal"
            ? horizontalRotation
            : verticalRotation;


    return (
        <mesh position={position} rotation={currRotation}>
            <boxGeometry args={[0.1, 1, 2.6]} />
            <meshStandardMaterial color="#ff0000" />
        </mesh>
    );
}