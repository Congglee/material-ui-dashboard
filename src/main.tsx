import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { CssVarsProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '~/App'
import '~/index.css'
import theme from '~/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </StrictMode>
)
