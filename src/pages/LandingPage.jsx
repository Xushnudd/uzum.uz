import Uzum from "../components/Uzum"
import Banner from "../components/Banner"
import Cards from "../components/Cards"
import Card2 from "../components/Card2"
import Footer from "../components/Footer"

function LandingPage() {
    return (
        <>
        <Uzum />
        <div className="mx-auto w-300 p-5">
            <Banner />
            <div className="w-full h-10"></div>
            <Cards />
            <div className="w-full h-10"></div>
            <Card2 />
            <div className="w-full h-10"></div>
            <Footer />
        </div>
        </>
    )
}

export default LandingPage