import { render } from "solid-js/dom";
import App from "./App";
import { Provider } from "./store";

render(
  () => (
    <Provider>
      <App />
    </Provider>
  ),
  document.body
);

window.addEventListener("load", () => {
  import("quicklink").then((quicklink) => {
    quicklink.listen();
  });
});
