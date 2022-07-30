import { render, Fragment } from 'preact'
import { App } from './app'
import { ThemeProvider } from './styled'
import './styled/reset.css'
import 'rc-tooltip/assets/bootstrap_white.css'
import 'react-responsive-modal/styles.css';

render(
  <Fragment>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Fragment>,

  document.getElementById('app')!
)
