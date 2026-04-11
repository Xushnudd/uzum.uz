import { Link } from "react-router-dom";
import Card2 from "../../components/Card2";
import Footer from "../../components/Footer";
import Uzum from "../../components/Uzum";
import useCartStore from "../../store/CartStore";
import Buy from "./Buy";

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
    <div className="w-full lg:flex lg:gap-5">
        <div className="w-2/3 border border-gray-300 flex flex-col items-center">
            <h2 className="text-xl font-bold">Savatingizda {items.length} ta mahsulot bor:</h2>

            {items.map((item, index) => (
                <div key={index} className="w-19/20 border-t border-gray-400">
                    <div className="mt-5 flex flex-col">
                        <span className="text-gray-500">Uzum Market Yetkazib berishi</span>
                        <span className="text-xl font-bold">Ertaga yetkazib beramiz</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked name="" id="" />
                        <img src={item.picture} alt="" className="w-30" />
                        <div className="h-full w-max flex flex-col justify-start">
                            <span className="w-max h-max uppercase bg-pink-400 p-0.5 text-[9px] text-white font-bold rounded">Arzon narx kafolati</span>
                            <span>{item.about}</span>
                        </div>
                        <div className="w-150 flex flex-col">
                            <span className="mt-5">Sotuvchi: {item.sellers ?? "Nomsiz"}</span>
                            <span className="text-violet-500 font-bold">Narxi: {item.price} so'm</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Buy />
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