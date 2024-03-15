import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './provider/ThemeProvider'
import { LanguageProvider } from './provider/LanguageProvider'


ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
 
  <React.StrictMode>
    <ThemeProvider>        
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>  
    </ThemeProvider>         
  </React.StrictMode>,
)