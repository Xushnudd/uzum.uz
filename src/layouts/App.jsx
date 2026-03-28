import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/LandingPage"

import Uzum from "../pages/Uzum"
import Market from "../pages/Market"
function App() {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
        </>
    )
}
export default App