import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./css/index.css"
import "./css/app.css"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='204429189782-v13ne8hlj0dp3s7auuq4gr2mdhucbqqv.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
