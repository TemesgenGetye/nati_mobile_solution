import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  Float,
  Html,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import logo_nati_only from "../asset/images/nati-mobile-logo.png";

function NatiLogo() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.1 + 0.5;
    }
  });

  return (
    <Float floatIntensity={1} rotationIntensity={0.1}>
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <planeGeometry args={[5, 5]} />
        <boxGeometry args={[8, 8, 0.0001]} />
        <meshPhysicalMaterial
          map={new THREE.TextureLoader().load(logo_nati_only)}
          transparent
          metalness={0.7}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          color="#c0c0c0"
          emissive="#303030"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Loading() {
  return <Html className="loader" color="white"></Html>;
}

export function PhoneModel() {
  return (
    <div className="w-full h-screen">
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 10] }}>
        <Suspense fallback={<Loading />}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <NatiLogo />
          </PresentationControls>
          <Environment preset="warehouse" />
          <spotLight
            position={[5, 5, 5]}
            intensity={0.4}
            angle={0.5}
            penumbra={1}
            color="#ffffff"
          />
          <spotLight
            position={[-5, -5, 5]}
            intensity={0.2}
            angle={0.5}
            penumbra={1}
            color="#ffffff"
          />
          <ambientLight intensity={0.1} />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.4}
            luminanceSmoothing={0.9}
            height={400}
            intensity={0.3}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
