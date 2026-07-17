"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

function AmbientParticles() {
  const groupRef = useRef<any>(null);
  
  // Deterministic seed-based random particles (looks like floating leaves or seeds)
  const [particles] = React.useState(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 20 - 5, // spread vertically, centered lower for scroll path
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        speed: 0.05 + Math.random() * 0.1,
        scale: 0.03 + Math.random() * 0.08,
        color: i % 3 === 0 ? "#6E8C62" : i % 3 === 1 ? "#D7A14A" : "#48693D", // Green, Gold, Deep Green
      });
    }
    return arr;
  });

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow rotational float for depth visualization
    groupRef.current.rotation.y = time * 0.02;
    
    // Gentle bobbing motion
    groupRef.current.children.forEach((mesh: any, i: number) => {
      const p = particles[i];
      mesh.position.y = p.position[1] + Math.sin(time * p.speed) * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <dodecahedronGeometry args={[p.scale, 0]} />
          <meshStandardMaterial 
            color={p.color}
            roughness={0.7}
            metalness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SceneContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<any>(null);

  useGSAP(() => {
    if (!cameraRef.current) return;
    
    // Smooth camera progression based on scrolling - moves down the tree path
    gsap.to(cameraRef.current.position, {
      y: -8,
      z: 7,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none" 
      style={{ zIndex: "var(--z-ground, 0)" }}
    >
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={["#050505"]} />
        <PerspectiveCamera 
          makeDefault 
          ref={cameraRef} 
          position={[0, 0, 10]} 
          fov={45} 
        />
        
        <ambientLight intensity={0.3} color="#F7F6F3" />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.0} 
          color="#D7A14A" 
          castShadow
        />
        
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
