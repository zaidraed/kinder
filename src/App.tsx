import { Routes, Route } from "react-router-dom"
import "./App.css"
import LandingPage from "./components/landingPage"
import Home from "./components/Home"
import LogIn from "./components/forms/Login"
import AskUs from "./components/forms/AskUs"
import Register from "./components/forms/Register"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/askus" element={<AskUs />} />
      </Routes>
    </div>
  )
}

export default App
