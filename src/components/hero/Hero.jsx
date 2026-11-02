import { Suspense } from "react";
import HeroText from "./HeroText";
import Background from "./Background";
import { Astronaut } from "../astronaut/Astronaut";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "../loader/Loader";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div id="home" className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Background />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* <Suspense fallback={<Loader />}> */}
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
              {/* <OrbitControls /> */}
            </Float>
            <Rig />
          {/* </Suspense> */}
        </Canvas>
      </figure>
    </div>
  );
};
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
}
export default Hero;
