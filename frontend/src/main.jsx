import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
