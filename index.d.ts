import * as THREE from 'three';
declare class InstancedGroupMesh extends THREE.Mesh {
    isInstancedGroupMesh: boolean;
    count: number;
    meshCollect: Record<string, THREE.Mesh[]>;
    instanceCollect: Record<string, THREE.InstancedMesh>;
    constructor(group: THREE.Group, count: number);
    setMatrixAt(index: number, matrix: THREE.Matrix4): void;
}
export default InstancedGroupMesh;
