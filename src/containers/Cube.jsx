import React, { useRef } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import * as THREE from 'three'

function Cube() {
  const ref = useRef()

  return (
    <mesh ref={ref} scale={[3, 3, 3]} rotation={[0, 18, 18]}>
      <boxGeometry />
      <meshPhongMaterial color={0x888888} />
    </mesh>
  )
}

function Sphere({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  )
}

function DirectionalLight() {
  const { camera } = useThree()

  return (
    <directionalLight color={0x00bfff} intensity={1} position={[0, 1, 1]}>
      <object3D position={camera.position} />
    </directionalLight>
  )
}

function App() {
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  function handleMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObject(cubeRef.current)
    if (intersects.length > 0) {
      const face = intersects[0].face
      const point = intersects[0].point
      const normal = face.normal
      const distance = 0.1
      const position = new THREE.Vector3().copy(normal).multiplyScalar(distance).add(point)

      setSpheres(spheres => [
        ...spheres,
        <Sphere key={spheres.length} position={position} />
      ])
    }
  }

  const [spheres, setSpheres] = React.useState([])
  const cubeRef = useRef()
  const { camera } = useThree()

  return (
    <Canvas onClick={handleMouseClick}>
      <Cube ref={cubeRef} />
      <DirectionalLight />
      {spheres}
      <ambientLight intensity={0.2} />
      <perspectiveCamera
        position={[0, 0, 5]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        makeDefault
      />
    </Canvas>
  )
}

export default App 