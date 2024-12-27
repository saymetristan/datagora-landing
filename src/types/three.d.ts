import { Object3DNode } from '@react-three/fiber'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: { object: THREE.Object3D; position?: [number, number, number] }
    }
  }
} 