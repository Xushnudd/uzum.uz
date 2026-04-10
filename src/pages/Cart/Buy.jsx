import { useState } from "react"
import PhoneInput from "../../components/Number"
import useCartStore from "../../store/CartStore"

const Buy = () => {
    const cartItems = useCartStore((state) => state.cartItems)

    function price() {
        const data = {
            disPrice: 0,
            price: 0,
            inMonth: 0,
            about: 0,
            sellers: 0,
            picture: 0,
            count: 1,
            id: 0
        }
        cartItems.map((item, i) => {
            data.price += item.price
            data.disPrice += item.disPrice
            data.inMonth += item.inMonth
            data.about += item.about
            data.sellers += item.sellers
            data.count = i+1
        })
        return data
    }

    const [ph, setph] = useState(false)

    function changePh() {
        setph(!ph)
    }

    return (
        <div className="w-80 h-max p-5 border border-gray-300 rounded-xl">
            <div>
                {ph ? <div className="absolute left-1/3 z-30"><PhoneInput /></div> : null}
            </div>
            <h2 className="text-2xl font-bold">Buyurtmalaringiz</h2>
            <div className="mt-5 w-full flex flex-col gap-5">
                <div className="w-full flex justify-between">
                    <span>Mahsulotlar({price().count}):</span>
                    <span>{price().price} so'm</span>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Jami</h3>
                    <div className="w-full flex justify-between items-center">
                        <span>Uzum karta bilan</span>
                        <div className="flex flex-col items-end">
                            <span className="text-xl text-violet-500 font-bold">{price().disPrice} so'm</span>
                            <span className="text-green-500 text-xs font-bold">Tejovingiz: {price().price - price().disPrice} so'm</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <span>Uzum kartasiz</span>
                        <span>{price().price + (price().price * 4) / 100} so'm</span>
                    </div>
                    <button onClick={changePh} className="w-full p-2 bg-violet-600 text-white rounded-lg font-bold duration-200 hover:bg-violet-500 active:bg-violet-400">Rasmiylashtirishga o'tish</button>
                </div>
            </div>
        </div>
    )
}

export default Buy