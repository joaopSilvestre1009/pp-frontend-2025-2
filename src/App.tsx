import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-page";
import Sign from "./pages/sign-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Sign />}/>
      </Routes>
    </BrowserRouter>
  )
}