import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  density?: number;
  speed?: number;
  accent?: string;
  className?: string;
}

/**
 * Build-safe 3D particle aurora rendered with raw three.js.
 * No react-three-fiber — avoids version-dependency breakage.
 */
export default function ParticleField({
  density = 900,
  speed = 0.00045,
  accent = "#E50914",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      host.clientWidth / host.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const count = density;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const accentColor = new THREE.Color(accent);
    const white = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
      const mixed = i % 7 === 0 ? accentColor : white.lerp(accentColor, 0.25);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const group = new THREE.Group();
    const icosa = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.7, 1),
      new THREE.MeshBasicMaterial({
        color: accent,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
    );
    const icosa2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.1, 1),
      new THREE.MeshBasicMaterial({
        color: "#ffffff",
        wireframe: true,
        transparent: true,
        opacity: 0.05,
      })
    );
    group.add(icosa, icosa2);
    scene.add(group);

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const tick = () => {
      points.rotation.y += speed;
      points.rotation.x += speed * 0.6;
      group.rotation.y += speed * 1.6;
      group.rotation.x = Math.sin(Date.now() * 0.0003) * 0.35;
      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.1 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      if (!host) return;
      const w = host.clientWidth;
      const h = host.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      geo.dispose();
      mat.dispose();
      icosa.geometry.dispose();
      (icosa.material as THREE.Material).dispose();
      icosa2.geometry.dispose();
      (icosa2.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [density, speed, accent]);

  return <div ref={ref} className={`h-full w-full ${className}`} />;
}