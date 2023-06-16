import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "react-phone-number-input/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./contexts/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
axios.defaults.baseURL = "https://e-commerce-repliq-server.vercel.app";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
