import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { BusinessProvider } from './contexts/BusinessContext'

// Check for URL parameters to enable bypass mode
function initializeBypassFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const bypassLogin = params.get('bypassLogin');
  const role = params.get('role');
  
  if (bypassLogin === 'true') {
    localStorage.setItem('bypassLogin', 'true');
    console.log('Bypass login enabled from URL parameter');
    
    if (role) {
      localStorage.setItem('userRole', role);
      console.log(`User role set to: ${role}`);
    }
  }
}

// Run initialization
initializeBypassFromUrl();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <BusinessProvider>
          <App />
        </BusinessProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)