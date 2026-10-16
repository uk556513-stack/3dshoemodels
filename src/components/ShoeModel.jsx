
import React, { Suspense, useMemo, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";

function ModelLoading() {
  return (
    <Html center>
      <div className="model-loading-text">
        LOADING 3D MODEL...
      </div>
    </Html>
  );
}

function SneakerModel({
  modelPath,
  autoRotate = true,
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  const model = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return clonedScene;
  }, [scene]);

  useFrame((state, delta) => {
    if (!modelRef.current || !autoRotate) return;

    modelRef.current.rotation.y += delta * 0.22;

    modelRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.035;
  });

  return (
    <group ref={modelRef} position={[0, -0.2, 0]}>
      <primitive
        object={model}
        scale={0.8}
        rotation={[0, -Math.PI / 4, 0]}
      />
    </group>
  );
}

const ShoeModel = ({
  modelPath = `${import.meta.env.BASE_URL}models/sneaker.glb`,
  autoRotate = true,
  enableControls = true,
  className = "",
}) => {
  return (
    <div className={`shoe-model-container ${className}`}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{
          position: [0, 1.4, 5],
          fov: 40,
        }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <Suspense fallback={<ModelLoading />}>
          <ambientLight intensity={1.4} />

          <directionalLight
            position={[4, 6, 5]}
            intensity={2.5}
            castShadow
          />

          <spotLight
            position={[-4, 5, -3]}
            intensity={2}
            color="#ff7848"
          />

          <SneakerModel
            modelPath={modelPath}
            autoRotate={autoRotate}
          />

          <ContactShadows
            position={[0, -1.05, 0]}
            opacity={0.45}
            scale={5}
            blur={2.5}
          />

          <Environment preset="city" />

          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom
              minDistance={3}
              maxDistance={8}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ShoeModel;
