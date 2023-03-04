import React, { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls } from "@react-three/drei"
import * as THREE from 'three'

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
        <smallSphere key={spheres.length} position={position} />
      ])
    }
  }

  const [spheres, setSpheres] = React.useState([])
  const globeRef = useRef()
  // const { camera } = useThree()

  return (
    <Canvas 
      camera={{ position: [0, 0, 7.5] }} 
      shadows
      dpr={[1, 2]}
      style={{
          width: '100vw',
          height: '100vh',
      }}
      onClick={handleMouseClick}
    >
      <Globe ref={globeRef} />
      {spheres}
      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, -30]} castShadow />
      {/* <pointLight position={[-10, -10, -10]} color="white" intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} /> */}
      <directionalLight position={[0, -5, 0]} color="white" intensity={2} />
      <directionalLight position={[0, 5, 0]} color="white" intensity={2} />
      <perspectiveCamera
        position={[0, 0, 5]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        makeDefault
      />
      <OrbitControls autoRotate autoRotateSpeed={6} makeDefault enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default App


function Globe() {
  const globeRef = useRef()
  const { camera } = useThree()

  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#ffffff').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: .75,
    clearcoatRoughness: 0,
  })

  return (
    <mesh ref={globeRef} scale={[3, 3, 3]} rotation={[0, 18, 18]} receiveShadow castShadow onClick={(e) => console.log('click cube')}>
      <sphereGeometry />
      <meshPhongMaterial color={0xffffff} opacity={0.4} transparent />
    </mesh>
  )
}

function smallSphere({ position }) {
  return (
    <mesh 
    position={position}
    onClick={(e) => console.log('click')}
    onDoubleClick={(e) => console.log('double click spot')}
    onPointerOver={(e) => console.log('over spot')}
    onPointerOut={(e) => console.log('out spot')}
    onUpdate={(self) => console.log('props have been updated')}
    >
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