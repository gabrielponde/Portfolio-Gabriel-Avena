/* ARQUIVO: components/band/App.js (Substitua tudo) */
/* (Se o seu arquivo for .tsx, isso também funciona) */

'use client'; 
import '../../css/index.css'; 
import * as THREE from 'three';
import { useEffect, useRef, useState, Suspense } from 'react'; 
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

const GLTF_PATH = '/assets/card-3d.glb';
const TEXTURE_PATH = '/assets/band.png';

useGLTF.preload(GLTF_PATH);
useTexture.preload(TEXTURE_PATH);

// 1. O 'App' recebe 'isMobile' e passa para o 'Band'
export default function App({ isMobile }) {
  return (
    <div className="canvasContainer">
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          {/* Nós SEMPRE renderizamos a Física e o Band.
            Nós apenas dizemos ao Band se ele é mobile ou não.
          */}
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band isMobile={isMobile} /> 
          </Physics>
        </Suspense>
        
        <Environment background={false} blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

// 2. REMOVEMOS O 'MobileHeroScene' COMPLETAMENTE

// --- 3. CENA 'Band' (Agora é "Inteligente") ---
// (Ela recebe a prop 'isMobile')
/* ARQUIVO: components/band/App.js (ou .tsx) */
/* (O resto do seu arquivo - App, etc. - continua igual) */

// --- CENA 'Band' (Com a altura do mobile corrigida) ---
/* ARQUIVO: components/band/App.js (Substitua SÓ esta função) */

// --- CENA 'Band' (Com a junta esférica corrigida) ---
/* ARQUIVO: components/band/App.js (Substitua SÓ esta função) */

// --- CENA 'Band' (Com otimização de performance para o 'drag') ---
/* ARQUIVO: components/band/App.js (Substitua SÓ esta função) */

// --- CENA 'Band' (Com a otimização de performance para o 'drag') ---
/* ARQUIVO: components/band/App.js (Substitua SÓ esta função) */

// --- CENA 'Band' (Com a otimização de performance 'getPoints') ---
/* ARQUIVO: components/band/App.js (Substitua SÓ esta função) */

// --- CENA 'Band' (Com a correção do typo 'CatmullRomCurve3') ---
function Band({ isMobile, maxSpeed = 50, minSpeed = 10 }) {
  // Seus refs e hooks (iguais)
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef(); 
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3(); 
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 10, linearDamping: 10 }; 
  const { nodes, materials } = useGLTF(GLTF_PATH);
  const texture = useTexture(TEXTURE_PATH);
  const { width, height } = useThree((state) => state.size);

  // ▼▼▼ CORREÇÃO AQUI ▼▼▼
  // Era 'CatmDullRomCurve3'
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(-2, 0, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0)]));
  // ▲▲▲ FIM DA CORREÇÃO ▲▲▲

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Posição (igual)
  const groupPosition = isMobile ? [0, 4.5, 0] : [3, 4, 0];
  
  // Props de Hover (igual)
  const hoverProps = isMobile ? {} : {
    onPointerOver: () => hover(true),
    onPointerOut: () => hover(false),
  };

  // Hooks de física (iguais, com a linha 83 corrigida)
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  // Hook de efeito (igual)
  useEffect(() => {
    if (hovered && !isMobile) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged, isMobile]);

  // useFrame (com a otimização de performance 'getPoints')
  useFrame((state, delta) => {
    // 1. Lógica do Arraste (igual)
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    
    // 2. Lógica da Banda (Sempre roda)
    if (fixed.current) {
      
      // Otimização (Sem 'lerp' pesado)
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation()); 
      curve.points[2].copy(j1.current.translation()); 
      curve.points[3].copy(fixed.current.translation());
      
      // Otimização (Pontos da curva)
      const points = dragged ? 8 : 32;
      
      // Atualiza a geometria da banda
      if (band.current) { 
         band.current.geometry.setPoints(curve.getPoints(points));
      }
      
      // Física de balanço (só no PC e quando não está arrastando)
      if (!isMobile && card.current && !dragged) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    }
  });

  // Seu código original (igual)
  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      {/* O JSX do return continua 100% igual */}
      <group position={groupPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[-1, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[1, 1.125, 0.01]} />
          <group
            className="cardGroup"
            scale={2.10}
            position={[0, -1.2, -0.05]}
            {...hoverProps}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={1} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-2, 1]} lineWidth={1.5} />
      </mesh>
    </>
  );
}