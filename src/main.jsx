import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import twitterLogo from './assets/twitter-logo.jpg'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Set the favicon
const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.type = 'image/jpeg';
favicon.rel = 'icon';
favicon.href = twitterLogo;
if (!document.querySelector("link[rel='icon']")) {
  document.head.appendChild(favicon);
}

// Set the title
document.title = 'Twitter Clone';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
