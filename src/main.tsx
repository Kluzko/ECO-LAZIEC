import { render, Fragment } from "preact";
import { App } from "./app";
import { Theme } from "./styled";
import "./styled/reset.css";

render(
  <Fragment>
    <Theme>
      <App />
    </Theme>
  </Fragment>,

  document.getElementById("app")!
);
