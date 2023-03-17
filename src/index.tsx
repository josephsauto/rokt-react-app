import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
