import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/LandingPage"
import DeliveryPoints from "../pages/delivery-points/delivery-points"

function App() {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/uz/about/delivery-points" element={<DeliveryPoints />} />
            </Routes>
        </div>
        </>
    )
}
export default App