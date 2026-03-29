import Uzum from "../components/Uzum"
import Banner from "../components/Banner"
import Cards from "../components/Cards"
import Card2 from "../components/Card2"
import Footer from "../components/Footer"

function LandingPage() {
    return (
        <>
        <div className="p-5">
            <Uzum />
            <Banner />
            <Cards />
            <Card2 />
            <Footer />
        </div>
        </>
    )
}

export default LandingPage