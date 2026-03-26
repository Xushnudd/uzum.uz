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
                        <Link>Topshirish punktlari</Link>
                        <Link>Vakansiyalar</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Foydalanuvchilarga</h2>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link>Biz bilan bog'lanish</Link>
                        <Link>Savol Javob</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Tadbirkorlarga</h2>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link>Uzumda soting</Link>
                        <Link>Sotuvchi kabinetga kirish</Link>
                        <Link>Topshirish punktini ochish</Link>
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
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTelegram} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer