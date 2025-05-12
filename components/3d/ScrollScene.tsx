"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, Text } from "@react-three/drei"
import * as THREE from "three"

// Custom 3D object that doesn't require external files
function CyberObject({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  // Animation based on scroll progress
  useFrame(() => {
    if (groupRef.current) {
      // Rotate based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2
      groupRef.current.rotation.z = scrollProgress * Math.PI * 0.5
    }
  })

  // Color based on scroll progress
  const color = new THREE.Color()
  color.setHSL(0.5 + scrollProgress * 0.1, 0.8, 0.5 + scrollProgress * 0.2)

  // Emissive intensity based on scroll and hover
  const emissiveIntensity = 0.2 + scrollProgress * 0.3 + (hovered ? 0.2 : 0)

  return (
    <group ref={groupRef}>
      {/* Main cube */}
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} scale={hovered ? 1.1 : 1}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#4299e1"
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* Orbiting smaller cubes */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * Math.PI * 0.4 + scrollProgress * Math.PI * 2) * 3,
            Math.cos(i * Math.PI * 0.4 + scrollProgress * Math.PI * 2) * 3,
            Math.sin(i * Math.PI * 0.7 + scrollProgress * Math.PI * 2) * 3,
          ]}
          scale={0.5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL((i * 0.1 + 0.5 + scrollProgress * 0.1) % 1, 0.8, 0.5)}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={emissiveIntensity * 0.8}
          />
        </mesh>
      ))}

      {/* Text */}
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Regular.json"
        maxWidth={2}
        textAlign="center"
      >
        Deepankar
      </Text>
    </group>
  )
}

export function ScrollScene({ scrollProgress }: { scrollProgress: number }) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ width: "100%", height: "100%" }}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <CyberObject scrollProgress={scrollProgress} />
      </Float>
    </Canvas>
  )
}
