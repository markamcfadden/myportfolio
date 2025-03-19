import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
);
