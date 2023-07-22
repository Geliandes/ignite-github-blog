import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { GithubProvider } from "./contexts/GithubContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

