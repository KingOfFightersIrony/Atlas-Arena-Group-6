import { useMemo } from "react";
import * as THREE from "three";
import { ThickEdges } from './OutlineMaterial';

type WallAnchorEntityProps = {
    position?: [number, number, number];
};

const wallAnchorColor = "#550000";

export function WallAnchorEntity({ position = [0, 0, 0] }: WallAnchorEntityProps) {
    const rightGeometry = useMemo(() => {
        const shape = new THREE.Shape();

        // Wall anchor right side shape construction
        // Centered around Y axis

        // Upper right corner
        shape.moveTo(0.75, 0.75);

        // Bottom right corner
        shape.lineTo(0.75, -0.5);

        // Bottom right corner inner
        shape.lineTo(0.6, -0.3);

        // Top right corner inner
        shape.lineTo(0.6, 0.6);

        // Top mid right inner
        shape.lineTo(0.25, 0.6);

        // Top mid right outer
        shape.lineTo(0.25, 0.75);

        // Closing shape
        shape.lineTo(0.75, 0.75);

        const extrudeSettings = {
            depth: 0.15,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        return geo;
    }, []);

    const leftGeometry = useMemo(() => {
        const shape = new THREE.Shape();

        // Wall anchor left side shape construction
        // Centered around Y axis

        // Upper left corner
        shape.moveTo(-0.75, 0.75);

        // Bottom left corner
        shape.lineTo(-0.75, -0.5);

        // Bottom left corner inner
        shape.lineTo(-0.6, -0.3);

        // Top left corner inner
        shape.lineTo(-0.6, 0.6);

        // Top mid left inner
        shape.lineTo(-0.25, 0.6);

        // Top mid left outer
        shape.lineTo(-0.25, 0.75);

        // Closing shape
        shape.lineTo(-0.75, 0.75);

        const extrudeSettings = {
            depth: 0.15,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        return geo;
    }, []);

    const bottomGeometry = useMemo(() => {
        const shape = new THREE.Shape();

        // Wall anchor bottom side shape construction
        // Centered around Y axis

        // Bottom left corner outer
        shape.moveTo(-0.6, -0.75);

        // Bottom right corner outer
        shape.lineTo(0.6, -0.75);

        // Bottom right corner inner
        shape.lineTo(0.4, -0.6);

        // Bottom left corner inner
        shape.lineTo(-0.4, -0.6);

        // Closing shape
        shape.lineTo(-0.6, -0.75);

        const extrudeSettings = {
            depth: 0.15,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        return geo;
    }, []);

    return(
        <group>
            <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
                {/* right mesh */}
                <mesh geometry={rightGeometry}>
                    <meshStandardMaterial
                        color={wallAnchorColor}
                        roughness={0.2}
                        metalness={0.8}
                        emissive={wallAnchorColor}
                        emissiveIntensity={0.2}
                    />
                </mesh>
                {/* Thick edge outline */}
                <ThickEdges geometry={rightGeometry} thresholdAngle={15} />
                {/* left mesh */}
                <mesh geometry={leftGeometry}>
                    <meshStandardMaterial
                        color={wallAnchorColor}
                        roughness={0.2}
                        metalness={0.8}
                        emissive={wallAnchorColor}
                        emissiveIntensity={0.2}
                    />
                </mesh>
                {/* Thick edge outline */}
                <ThickEdges geometry={leftGeometry} thresholdAngle={15} />
                {/* bottom mesh */}
                <mesh geometry={bottomGeometry}>
                    <meshStandardMaterial
                        color={wallAnchorColor}
                        roughness={0.2}
                        metalness={0.8}
                        emissive={wallAnchorColor}
                        emissiveIntensity={0.2}
                    />
                </mesh>
                {/* Thick edge outline */}
                <ThickEdges geometry={bottomGeometry} thresholdAngle={15} />
            </group>
        </group>
    );
}
