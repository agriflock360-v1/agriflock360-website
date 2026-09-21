import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}><App /></BrowserRouter>;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
