import * as THREE from 'three';

export default class BackgroundAnimation {
  constructor() {
    this.canvas = document.getElementById('background-canvas');
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas,
      alpha: true,
      antialias: true 
    });
    
    this.particles = [];
    this.mouse = new THREE.Vector2(0, 0);
    this.lastMousePosition = new THREE.Vector2(0, 0);
    this.mouseVelocity = new THREE.Vector2(0, 0);
    
    this.init();
  }
  
  init() {
    // Configure renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    
    // Position camera
    this.camera.position.z = 5;
    
    // Create particles
    this.createParticles();
    
    // Add event listeners
    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    
    // Start animation loop
    this.animate();
  }
  
  createParticles() {
    // Clear any existing particles
    this.particles.forEach(particle => {
      this.scene.remove(particle.mesh);
    });
    this.particles = [];
    
    // Particle material
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x4a4af4,
      transparent: true,
      opacity: 0.6
    });
    
    // Create particles
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.1 + 0.05, 16, 16);
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 1) * 5;
      
      // Random velocity
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        0
      );
      
      this.particles.push({
        mesh,
        velocity,
        originalPosition: mesh.position.clone(),
        originalScale: mesh.scale.clone(),
      });
      
      this.scene.add(mesh);
    }
  }
  
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Recreate particles for responsive design
    this.createParticles();
  }
  
  onMouseMove(event) {
    // Calculate normalized mouse position
    this.lastMousePosition.copy(this.mouse);
    
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    // Calculate mouse velocity
    this.mouseVelocity.x = this.mouse.x - this.lastMousePosition.x;
    this.mouseVelocity.y = this.mouse.y - this.lastMousePosition.y;
  }
  
  updateParticles() {
    const time = performance.now() * 0.001; // Convert to seconds
    
    this.particles.forEach(particle => {
      // Add slight wave motion
      particle.mesh.position.x += particle.velocity.x;
      particle.mesh.position.y += particle.velocity.y;
      
      // Add subtle oscillation
      particle.mesh.position.x += Math.sin(time * 0.5 + particle.mesh.position.y) * 0.003;
      particle.mesh.position.y += Math.cos(time * 0.5 + particle.mesh.position.x) * 0.003;
      
      // Apply mouse influence
      const distance = new THREE.Vector2(
        this.mouse.x * window.innerWidth / 100 - particle.mesh.position.x,
        this.mouse.y * window.innerHeight / 100 - particle.mesh.position.y
      );
      
      const strength = Math.max(0, 1 - distance.length() / 2);
      
      if (strength > 0.025) {
        particle.mesh.position.x += this.mouseVelocity.x * strength * 2;
        particle.mesh.position.y += this.mouseVelocity.y * strength * 2;
      }
      
      // Slowly return to original position
      particle.mesh.position.x += (particle.originalPosition.x - particle.mesh.position.x) * 0.01;
      particle.mesh.position.y += (particle.originalPosition.y - particle.mesh.position.y) * 0.01;
      
      // Boundary check
      if (Math.abs(particle.mesh.position.x) > 10) {
        particle.velocity.x *= -1;
      }
      
      if (Math.abs(particle.mesh.position.y) > 10) {
        particle.velocity.y *= -1;
      }
      
      // Glow effect
      const pulseFactor = Math.sin(time * 0.5 + particle.mesh.position.x * 10) * 0.1 + 1;
      particle.mesh.scale.set(
        particle.originalScale.x * pulseFactor,
        particle.originalScale.y * pulseFactor,
        particle.originalScale.z * pulseFactor
      );
    });
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    this.updateParticles();
    this.renderer.render(this.scene, this.camera);
  }
}