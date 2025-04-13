import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

// Create root and render application
createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
