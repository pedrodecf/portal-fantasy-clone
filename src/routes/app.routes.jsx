import { Routes, Route } from "react-router-dom"

import { App } from "../App.jsx"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
