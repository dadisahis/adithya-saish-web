import React, { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
function AnimatedSphere() {
  let color = "#E0144C";
  const sphereRef = useRef();
  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
  function changeColor() {
    const colorArray = ["#E0144C", "#00ABB3", "#FFCACA", "#F07DEA", "#607EAA"];
    sphereRef.current.color.set(colorArray[getRandom(colorArray.length)]);
    sphereRef.current.needsUpdate = true;
  }
  setInterval(changeColor, 2000);
  return (
    <Sphere visible args={[1, 100, 200]} scale={2} castShadow>
      <MeshDistortMaterial
        ref={sphereRef}
        color={color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={5}
      />
    </Sphere>
  );
}

export default AnimatedSphere;
