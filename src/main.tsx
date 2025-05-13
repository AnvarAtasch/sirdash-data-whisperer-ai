
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This ensures the SVG to PNG conversion runs before the app mounts
import '../convert-svg-to-png.js'

createRoot(document.getElementById("root")!).render(<App />);
