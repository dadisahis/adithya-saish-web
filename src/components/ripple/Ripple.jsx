import React, {
  Suspense,
  useMemo,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import "./ripple.scss";
import circleImg from "../../assets/circle.png";
import AnimatedSphere from "../sphere/sphere";
extend({ OrbitControls });
function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  let cameraRef = useRef();
  useFrame(() => cameraRef.current.update());
  return (
    <orbitControls
      ref={cameraRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
    />
  );
}
function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  let color = "#E0144C";
  const pointRef = useRef();
  const bufferRef = useRef();

  let phase = 0;
  let freq = 0.002;
  let amplitude = 10;
  const graph = useCallback(
    (x, z) => {
      return Math.sin(freq * (x ** 2 + z ** 2 + phase)) * amplitude;
    },
    [phase, freq, amplitude]
  );

  const count = 350;
  const sep = 0.3;
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    phase += 15;
    let positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z);

        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
  function changeColor() {
    const colorArray = ["#E0144C", "#00ABB3", "#FFCACA", "#F07DEA", "#607EAA"];
    pointRef.current.color.set(colorArray[getRandom(colorArray.length)]);
    console.log(pointRef.current.color);
    pointRef.current.needsUpdate = true;
  }
  setInterval(changeColor, 2000);

  return (
    <points receiveShadow>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={pointRef}
        attach="material"
        map={imgTex}
        color={color}
        size={1.0}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}
function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 80, 0], fov: 65 }}
      shadowMap
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}

function AnimSphere({ color }) {
  return (
    <Canvas shadowMap>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <AnimatedSphere color={color} />
      </Suspense>
    </Canvas>
  );
}

function Ripple({ color }) {
  return (
    <div className="wrapper">
      {/* <div className="sphere">
        <Suspense fallback={null}>
          <AnimSphere color={color} />
        </Suspense>
      </div> */}
      <div className="ripple">
        <Suspense fallback={null}>
          <AnimationCanvas color={color} />
        </Suspense>
      </div>
    </div>
  );
}

export default Ripple;
