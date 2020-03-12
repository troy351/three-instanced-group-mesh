# three-instanced-group-mesh

<p>
  <a href="https://npmcharts.com/compare/three-instanced-group-mesh?minimal=true"><img src="https://img.shields.io/npm/dm/three-instanced-group-mesh.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/three-instanced-group-mesh"><img src="https://img.shields.io/npm/v/three-instanced-group-mesh.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/three-instanced-group-mesh"><img src="https://img.shields.io/npm/l/three-instanced-group-mesh.svg" alt="License"></a>
</p>

Instanced Group Mesh support for [three.js](https://github.com/mrdoob/three.js)

## Motivation

Three.js supports [`instancedMesh`](https://threejs.org/docs/index.html#api/en/objects/InstancedMesh) which is a high performance way to render a large number of meshes with the same geometry and material.

But sometimes the model which needed to be instanced can be a complex group rather than a single mesh. This plugin can helps you easily instancing a complex group of meshes.

**NOTE: Object type other than `Mesh` (like `Light`, `Camera`, etc) in the given group will be ignored when instancing**

## Compatibility

Compatible with three.js with `instancedMesh` supports, aka `r110` and above

## Install

```shell
$ npm install three-instanced-group-mesh
```

## Usage

_Just like `THREE.instancedMesh`_

### ES Module

```javascript
import InstancedGroupMesh from "three-instanced-group-mesh";

const instancedGroupMesh = new InstancedGroupMesh(group, count);
instancedGroupMesh.setMatrixAt(index, matrix)
```

### Browser

```html
<script src="https://unpkg.com/three/build/three.js"></script>
<script src="https://unpkg.com/three-instanced-group-mesh/dist/THREE.InstancedGroupMesh.min.js"></script>
<script>
  const instancedGroupMesh = new THREE.InstancedGroupMesh(group, count);
  instancedGroupMesh.setMatrixAt(index, matrix)
</script>
```

## License

MIT
