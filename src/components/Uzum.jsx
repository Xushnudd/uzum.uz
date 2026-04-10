import { Link } from "react-router-dom"
import Katalog from "./Katalog"
import { useState } from "react"
import PhoneInput from "./Number"

function Uzum() {
  const [st, setst] = useState(false)
  const [ph, setph] = useState(false)

  function changeSt() {
    setst(!st)
  }

  function changePh() {
    setph(!ph)
  }

  return (
    <>
      <div className="m-auto w-full py-3 bg-gray-200 flex justify-evenly gap-5">
        <div className=" flex justify-start">
          <div onClick={changeSt} className="px-5 cursor-pointer"><i className="fa-solid fa-location-dot" ></i>Toshkent<i class="fa-solid fa-chevron-down" ></i></div>
          <Link to={"/uz/about/delivery-points"} className="text-gray-800">Topshirish punktlari</Link>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-3">
            <Link to={"https://seller.uzum.uz/"} className="text-blue-700">Sotuvchi bo'lish</Link>
            <div className="h-full border border-gray-500"></div>
            <Link to={"https://promo.uzum.uz/uz/promo/pvz"} className="text-blue-700 font-bold">Topshirish punktini ochish</Link>
          </div>
          <Link to={"/uz/faq"} className="text-gray-600 ">Savol-javob</Link>
          <div onClick={changePh} className="text-gray-600 cursor-pointer">Buyurtmalarim</div>
          <div className="flex gap-1">
            <img src="/uzbek flag.png" alt="" className="w-5 h-5 rounded-full" /><div className="">O'zbekcha</div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-300">
        <div className="w-full flex mt-5">
          <Link to={"/"} className="flex"><img src="/uzum2.png" alt="" className="w-10 h-10 rounded-full ml-5" />  <div className="text-blue-600 text-2xl font-bold pl-5">UZUM MARKET </div></Link>
          <div className="text-blue-600 border border-blue-100 w-max bg-blue-100  rounded p-1 pl-5 pr-5 ml-10"><i className="fa-solid fa-diagram-next pr-5" ></i>Katalog</div>
          <input type="text" placeholder="Mahsulotlar Izlash" className="border border-gray-300 pr-50 pl-10 ml-10" />
          <i className="fa-solid fa-magnifying-glass  bg-gray-200 pr-10 pt-3 pl-5 text-gray-500" ></i>
          <div onClick={changePh} className="pl-10 cursor-pointer"><i className="fa-solid fa-user pr-5" ></i>Kirish</div>
          <div className="pl-10"><i className="fa-solid fa-heart pr-5"></i>Saralangan</div>
          <Link to={"/uz/cart"} className="pl-10"><i className="fa-solid fa-cart-shopping pr-5" ></i>Savat</Link>
        </div>

        <div className="w-full mt-5 flex">
          <div className="pl-5"><i className="fa-solid fa-fire pr-5" ></i>Hafta tovarlari</div>
          <div className="pl-5"><i className="fa-solid fa-shirt pr-5"></i>Bahorgi kolleksiya</div>
          <div className="pl-5"><i className="fa-solid fa-pump-soap pr-5" ></i>Sizning go'zalligingiz</div>
          <div className="pl-5"><i className="fa-solid fa-guitar pr-5"></i>Xobbi va ijod</div>
          <div className="pl-5"><i className="fa-solid fa-mobile-screen pr-5" ></i>Smartfonlari</div>
          <div className="pl-5"><i className="fa-solid fa-rug pr-5" ></i>Ramazon Hayiti</div>
          <div className="pl-5 text-gray-500">Mebel</div>
          <div className="pl-5 text-gray-500">Turizm,baliq ovi va ovchilik</div>
          <div className="pl-5 text-gray-500">Yana<i className="fa-solid fa-chevron-down" ></i></div>
        </div>
        <div onClick={changeSt}><Katalog on={st} /></div>
        <div>
          {ph ? <div className="absolute left-1/3 z-30"><PhoneInput /></div> : null}
        </div>
      </div>
    </>)
}
export default Uzum