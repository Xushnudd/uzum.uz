import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faStar, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import useCartStore from "../store/CartStore"

function Card({ disPrice, price, inMonth, about, sellers, picture, id }) {
    const addToCart = useCartStore((state) => state.addToCart);

    const data = {
        disPrice: disPrice ?? null,
        price: price ?? null,
        inMonth: inMonth ?? null,
        about: about ?? null,
        sellers: sellers ?? null,
        picture: picture ?? null,
        count: 1,
        id: id ?? null
    }

    return (
        <div className="border border-white w-70 m-5 rounded-xl shadow-2xl ">
            <div><img src={picture} alt="" className="w-70 h-90 rounded-xl" /></div>
            <div className="p-2 ">
                <div className="text-purple-600 font-bold ">{disPrice} <FontAwesomeIcon icon={faCreditCard} /></div>
                <div className="text-gray-400 font-bold text-sm">{price}</div>
                <div className="bg-yellow-300 text-xs w-max p-1 rounded-md">{inMonth} so'm/oyiga</div>
                <div className="text-xs mb-1">{about} </div>
                <div className="flex mb-2">
                    <div className="text-yellow-400 text-xs"><FontAwesomeIcon icon={faStar} /></div>
                    <div className="text-xs mr-1">4.9</div> 
                    <div className="text-xs text-gray-400">({sellers} sharhlar)</div>
                </div>
                
                <div 
                    onClick={() => addToCart(data)} 
                    className="cursor-pointer bg-purple-600 w-65 py-1.5 text-white font-bold text-center rounded-md hover:bg-purple-500 active:bg-purple-400"
                >
                    <FontAwesomeIcon icon={faBagShopping} /> Ertaga
                </div>
            </div>
        </div>
    )
}
export default Card