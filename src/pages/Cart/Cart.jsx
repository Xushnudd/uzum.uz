import { Link } from "react-router-dom";
import Card2 from "../../components/Card2";
import Footer from "../../components/Footer";
import Uzum from "../../components/Uzum";
import useCartStore from "../../store/CartStore";

const EmptyCart = () => (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <img src="/basket/catUzum.png" alt="Mushuk rasmi" className="w-32" />
        <div className="w-100 text-center">
            <h2 className="py-10 text-2xl font-bold">Savatingiz hozircha bo‘sh</h2>
            <p>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
            <Link to="/">
                <button className="my-5 bg-gray-200 font-bold p-2 rounded cursor-pointer hover:bg-gray-300">Bosh sahifa</button>
            </Link>
        </div>
    </div>
)

const FullCart = ({ items }) => (
    <div className="w-full flex gap-5">
        <div className="w-2/3 border border-gray-300 flex flex-col items-center">
            <h2 className="text-xl font-bold">Savatingizda {items.length} ta mahsulot bor:</h2>

            {items.map((item, index) => (
                <div key={index} className="w-19/20 border-t border-gray-400">
                    <div className="mt-5 flex flex-col">
                        <span className="text-gray-500">Uzum Market Yetkazib berishi</span>
                        <span>Ertaga yetkazib beramiz</span>
                    </div>
                    <span>{item.about}</span>
                    <span className="font-bold">{item.price}</span>
                </div>
            ))}
        </div>
        <div className="w-1/3">as</div>
    </div>
)

const Cart = () => {
    const cartItems = useCartStore((state) => state.cartItems);

    return (
        <div className="w-full min-h-screen">
            <Uzum />
            <div className="m-auto w-300">
                <div className="w-full py-20">
                    {cartItems.length === 0 ? <EmptyCart /> : <FullCart items={cartItems} />}
                </div>
                <Card2 />
                <div className="h-10"></div>
                <Footer />
            </div>
        </div>
    );
};

export default Cart;