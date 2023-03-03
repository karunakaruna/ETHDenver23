import React, { useRef, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings.jsx';
import './Popup.css';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../Overlay/Overlay.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;


// export default function Popup() {
//   return (
//     <div className="App">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <Globe autoRotate rotateSpeed={3}/>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   )
// }

// function Globe(props:any) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // // Subscribe this component to the render-loop, rotate the mesh every frame
//   // useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <sphereGeometry args={[1, 32, 16]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }