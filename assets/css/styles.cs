/* Base styles */
:root {
  --primary-color: #4a4af4;
  --secondary-color: #6c63ff;
  --background-color: #fafafa;
  --text-color: #333333;
  --accent-color: #ff6b6b;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  overflow-x: hidden;
}

/* Canvas background */
#background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none; /* Allow clicking through the canvas */
  opacity: 0.8;
}

/* Main content */
.main-content {
  position: relative;
  z-index: 1;
}

/* Hero section */
.hero {
  background: transparent;
}

.title {
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  opacity: 0.85;
  font-weight: 400;
}

/* Buttons */
.button.is-primary {
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

.button.is-primary:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.button.is-light {
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  transition: all 0.3s ease;
}

.button.is-light:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Feature boxes */
.box {
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  background-color: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 3; 
  overflow: hidden; 
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.12);
}

/* Add a subtle border to enhance the relief effect */
.box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 3;
}

section.section {
  position: relative;
  z-index: 1; 
  background: rgba(250, 250, 250, 0.7);
  padding: 3rem 1.5rem;
  backdrop-filter: blur(5px);
}

/* Footer */
.footer {
  background: transparent;
  padding: 3rem 1.5rem;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .hero-body {
    padding: 3rem 1.5rem;
  }
  
  .title {
    font-size: 2.5rem !important;
  }
  
  .subtitle {
    font-size: 1.5rem !important;
  }
}