import React from "react";
import { createRoot } from "react-dom/client";

import {
  App,
  WithErrorBoundary
} from "@/app";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <WithErrorBoundary>
      <App />
    </WithErrorBoundary>
  </React.StrictMode>
);
