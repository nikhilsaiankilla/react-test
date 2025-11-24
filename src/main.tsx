import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VislyProvider } from 'visly-sdk/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VislyProvider projectId="PROJECT-12356789">
      <App />
    </VislyProvider>
  </StrictMode>,
)
