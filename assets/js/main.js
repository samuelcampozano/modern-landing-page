import BackgroundAnimation from './animation.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize background animation
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the Three.js background animation
  const backgroundAnimation = new BackgroundAnimation();
  
  // Add scroll animations
  initScrollAnimations();
  
  // Set current year in footer if it exists
  const yearElement = document.querySelector('footer .content p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('{current year}', currentYear);
  }
});

// Setup GSAP animations triggered by scrolling
function initScrollAnimations() {
  // Animate feature boxes on scroll
  gsap.utils.toArray('.box').forEach((box, i) => {
    gsap.from(box, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.12)", 
      scrollTrigger: {
        trigger: box,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      delay: i * 0.1,
      onComplete: () => {
        // Explicitly set the box shadow after animation
        gsap.set(box, {
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08)"
        });
      }
    });
  });

  // Parallax effect on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    gsap.to(section, {
      backgroundPosition: `50% ${window.innerHeight / 2}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}