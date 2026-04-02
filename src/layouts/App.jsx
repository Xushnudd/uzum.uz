import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/LandingPage"
import DeliveryPoints from "../pages/delivery-points/delivery-points"
import Careers from "../pages/Careers/Careers"
import Faq from "../pages/Faq/Faq"

function App() {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/uz/about/delivery-points" element={<DeliveryPoints />} />
                <Route path="/uz/about/careers" element={<Careers />} />
                <Route path="/uz/faq" element={<Faq />} />
            </Routes>
        </div>
        </>
    )
}
export default App