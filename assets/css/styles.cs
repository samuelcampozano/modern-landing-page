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
  z-index: -1;
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
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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