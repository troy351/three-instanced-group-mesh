import typescript from "@rollup/plugin-typescript";
import buble from '@rollup/plugin-buble';
import { terser } from "rollup-plugin-terser";

const DIST_FILE_NAME = 'THREE.InstancedGroupMesh'
const DIST_FOLDER = 'dist'

function getFileName(module, isMin = false) {
  return `${DIST_FOLDER}/${DIST_FILE_NAME}${module ? '.' + module : ''}${isMin ? '.min' : ''}.js`
}

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: getFileName('common'),
        format: "cjs",
        exports: "named"
      },
      {
        file: getFileName('esm'),
        format: "esm",
        exports: "named"
      },
      {
        file: getFileName(),
        format: "iife",
        name: DIST_FILE_NAME,
        globals: {
          three: 'THREE'
        }
      }
    ],
    watch: {
      exclude: "node_modules/**"
    },
    plugins: [
      typescript(),
      buble()
    ],
    external: ["three"]
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: getFileName('common', true),
        format: "cjs",
        exports: "named"
      },
      {
        file: getFileName('esm', true),
        format: "esm",
        exports: "named"
      },
      {
        file: getFileName('', true),
        format: "iife",
        name: DIST_FILE_NAME,
        globals: {
          three: 'THREE'
        }
      }
    ],
    watch: {
      exclude: "node_modules/**"
    },
    plugins: [
      typescript(),
      terser(),
      buble()
    ],
    external: ["three"]
  }
];
