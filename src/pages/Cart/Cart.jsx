import { Link } from "react-router-dom";
import Card2 from "../../components/Card2";
import Footer from "../../components/Footer";
import Uzum from "../../components/Uzum";

const Cart = () => (
    <div className="w-full h-screen">
        <Uzum />
        <div className="w-full h-[40%] my-20">
            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
                <img src="/basket/catUzum.png" alt="Mushuk rasmi" className="w-30" />
                <div className="w-100 text-center">
                    <h2 className="py-10 text-2xl font-bold">Savatingiz hozircha bo‘sh</h2>
                    <p>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
                    <Link to={"/"}>
                    <button className="my-5 bg-gray-200 font-bold p-2 rounded cursor-pointer hover:bg-gray-300">Bosh sahifa</button>
                    </Link>
                </div>
            </div>
        </div>
        <Card2 />
        <div className="h-10"></div>
        <Footer />
    </div>
)

export default Cart