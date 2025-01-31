import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { instanceStore } from './store/instanceStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={instanceStore}>
      <App />
    </Provider>
  </StrictMode>,
)
