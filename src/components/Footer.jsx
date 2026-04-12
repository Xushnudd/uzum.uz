import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGooglePlay, faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <>
            <footer className="w-full flex justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Biz haqimizda</h2>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link to={"/uz/about/delivery-points"}>Topshirish punktlari</Link>
                        <Link to={"/uz/about/careers"}>Vakansiyalar</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Foydalanuvchilarga</h2>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link>Biz bilan bog'lanish</Link>
                        <Link to={"/uz/faq"}>Savol Javob</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Tadbirkorlarga</h2>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link to={"https://seller.uzum.uz/"}>Uzumda soting</Link>
                        <Link to={"https://seller.uzum.uz/"}>Sotuvchi kabinetga kirish</Link>
                        <Link to={"/uz/about/delivery-points"}>Topshirish punktini ochish</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Ilovani yuklab olish</h2>
                        <div className="flex flex-col gap-2 text-gray-600">
                            <Link><FontAwesomeIcon icon={faAppleAlt} /> AppStore</Link>
                            <Link><FontAwesomeIcon icon={faGooglePlay} /> Google Play</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Uzum ijtimoiy tarmoqlarda</h2>
                        <div className="text-2xl text-gray-600">
                            <Link to={"https://instagram.com"}><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to={"https://t.me/"}><FontAwesomeIcon icon={faTelegram} /></Link>
                            <Link to={"https://facebook.com"}><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to={"https://youtube.com"}><FontAwesomeIcon icon={faYoutube} /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer