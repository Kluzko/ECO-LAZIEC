import { render, Fragment } from 'preact'
import { App } from './app'
import { ThemeProvider } from './styled'
import './styled/reset.css'

render(
  <Fragment>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Fragment>,

  document.getElementById('app')!
)
