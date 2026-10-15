import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../script.js";

function ReactEnhancement() {
  useEffect(() => {
    document.documentElement.dataset.reactUi = "enabled";
  }, []);

  return null;
}

const reactMount = document.createElement("div");
reactMount.id = "react-enhancements";
document.body.appendChild(reactMount);

createRoot(reactMount).render(
  <StrictMode>
    <ReactEnhancement />
  </StrictMode>,
);
