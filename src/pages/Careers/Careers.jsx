import { Link } from "react-router-dom"
import Uzum from "../../components/Uzum"
import Footer from "../../components/Footer"

const Careers = () => (
    <>
        <Uzum />
        <div className="my-10 mx-auto w-300 px-5 flex">
            <div className="w-1/3 flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Uzum</h2>
                <div className="flex flex-col gap-3">
                    <Link to={"/uz/about/delivery-points"}>Topshirish punktlari</Link>
                    <Link to={"/uz/about/careers"} className="text-gray-500">Vakansiyalar</Link>
                </div>
            </div>
            <div className="w-full p-10 border border-gray-400 flex flex-col gap-7">
                <div>
                    <h1 className="text-3xl font-bold uppercase">Vakansiyalar</h1>
                    <p>Uzum Market jamoasining safiga qo’shilmoqchimisiz? Nima uchun bizga mos kelishingiz haqida so’zlab bering va o’z rezyumengizni yuboring</p>
                </div>
                <div className="w-full text-lg flex gap-1.5">
                    <button className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-500">Uzum Market`da ishlashni istayman</button>
                    <button className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400">Telegram bot - @Uzum_jbot</button>
                </div>
                <div>
                    <div>Oʻzingizga mos kasbni topadigan ish profillari:</div>
                    <ul className="list-inside list-['-'] pl-3">
                        <li>Buxgalteriya va moliya</li>
                        <li>Uzum Market yetkazib berish xizmati</li>
                        <li>Maʼmuriy xodim</li>
                        <li>Ombor logistikasi</li>
                        <li>Aloqa markazi</li>
                        <li>Xodimlar boshqaruvi</li>
                    </ul>
                    <p>Agar hali sizning orzuyingizdagi vakansiya bizda ochilmagan boʻlsa, oʻzingizga qulay usulda rezyumeni zaxiraga yuboring:</p>
                    <div className="flex gap-1">
                        <span>Telegram:</span>
                        <Link to={"https://t.me/"} className="text-gray-500 hover:text-black">@HR_UZUM</Link>
                    </div>
                    <div className="flex gap-1">
                        <span>Email:</span>
                        <Link to={"https://t.me/"} className="text-gray-500 hover:text-black">hr-market@uzum.com</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default Careers