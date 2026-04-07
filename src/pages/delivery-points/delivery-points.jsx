import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

import Uzum from "../../components/Uzum"
import Footer from "../../components/Footer"
import MyMap from "../../components/MyMap";

let pickupPoints = [
    {
        address: "Toshkent sh., Mirobod tumani, Mehrjon ko'chasi, 2 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, 2 mavzesi, 6 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Chorsu maydoni, 3A uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sergeli tumani, Sergeli 6A mavzesi, 23 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Muxtor Ashrafi ko'chasi, 103 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Baku ko'chasi, 83/1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Kichik halqa avtomobil yo‘li, 81 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, 5 mavzesi, 1A uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Zafarobod ko‘chasi, 12/1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Qunduzsoy ko'chasi, 4 berk, 12 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug‘bek tumani, 1 mavzesi, 29 uy.",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontoxur tumani, Beltepa ko‘chasi, 25 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, E mavzesi, 1 uy, 2 xonadon",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug‘bek tumani, Mirzo Ulug‘bek ko‘chasi, 148 uy, 49 xonadon",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Beshag‘och mavzesi, 3b uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sirg'ali tumani, Quruvchi mavzesi, 41 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, 4 mavze, 5 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Murabbiy ko‘chasi, 113 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, 20 mavze, 27 uy, 110 xonadon",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirobod tumani, Abdurauf Fitrat ko'chasi",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Oksoy ko'chasi, 11 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, Ko‘kcha Darvoza ko‘chasi, 555B",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, 11 mavzesi, 19 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Chinobod ko‘chasi, 218 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sergeli tumani, Sergeli 3 mavzesi, 31B uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Karim Zaripov ko'chasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Labzak ko'chasi, 76 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yangihayot tumani, Sputnik 16 dahasi, 52 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Do'rmon yo'li ko'chasi, 20 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Usta Olim ko'chasi, 7 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yakkasaroy tumani, Bog‘ibuston ko'chasi, 147 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, 4 dahasi, 46 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, 10 mavze, 5 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yangihayot tumani, 8 qurilish hududi, 71 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo ulug‘bek tumani, Gulsanam ko'chasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sergeli tumani, Djun Аriq ko'chasi, 9 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Shifonur ko‘chasi, 2 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirobod tumani, Sayxun ko'chasi, 38 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sirg'ali tumani, Intizom ko'chasi, 8А uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Qorasaroy ko‘chasi, 3 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Yangi Olmazor ko'chasi, 10 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Parkent ko‘chasi, 235 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Bektemir tumani, Xayotbaxsh ko‘chasi, 42 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Bektemir tumani, Muxtor Auezov ko‘chasi, 2 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Jarqo‘rg‘on ko'chasi, 33 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirobod tumani, Gaydar Aliyev ko'chasi, 204 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Bektemir tumani, Barhayot ko'chasi, 223 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Bobojonov ko‘chasi, 22 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Bektemir tumani, Oltin topgan ko'chasi, 3 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Yunusota ko'chasi, 14 mavzesi, 30 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, 4-mavzesi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, S mavzesi",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Baraka ko'chasi, 101a uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Aviasozlar 1 mavzesi, 125 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sergeli tumani, Nilufar ko'chasi, 4 tor ko'chasi, 46 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sirg'ali tumani, Yangi Sergeli ko'chasi",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, 3 mavzesi, 27 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yakkasaroy tumani, Shota Rustaveli ko'chasi, 78A uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00" // Yakshanba o'z ichiga oladi
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, ToshGRES mikrorayon, 8 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Yalangach dahasi, 6 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, 30 mavze, 30 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yakkasaroy tumani, Qushbegi massivi, 13 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Ibn Sino 1 mavzesi, 13 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, 24 kvartal, Lutfiy ko'chasi, 14 uy (Vatan)",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sirg'ali tumani, Sergeli 7 mavzesi, 29B uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Chashma ko'chasi, 11/4 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Chuqursoy ko'chasi, 5a uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo ulug‘bek tumani, Feruza ko'chasi, 17 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirobod tumani, 8 mart ko'chasi, 78 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, Yusuf Sakkokiy ko‘chasi, 204 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Ziyolilar ko'chasi, 10 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, 2 mavzesi, 14 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, 7 dahasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Kalanov massivi, 8 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Sirg'ali tumani, 5 mavzesi, 52uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, Al-Xorazmiy-2, 50 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "11:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Kashgar dahasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yakkasaroy tumani, Sharof Rashidov ko'chasi, 40 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Zulfiyaxonim ko'chasi, 18 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, Farhod ko'chasi, 3B uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Qorasqamish mavzesi, 2/1 dahasi, 8 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yashnobod tumani, Maxtumquli ko'chasi, 117 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Ibn Sino-2 mavzesi, 9 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Yakkasaroy tumani, Boshlik shoh ko‘chasi, 29-uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, 14-mavze, 11-uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Chinobod ko'chasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Qorasaroy ko'chasi, 249/2 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo Ulug'bek tumani, Qorasuv mavzesi, 3 daha, 14",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "09:00 - 21:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, 23-mavze, 59-uy (Farhod bozori)",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo ulug‘bek tumani, Kichik xalqa avtomobil yo'li ko'chasi, Asaka 39",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Ahmad Donish ko'chasi, 4 mavzesi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Bektemir tumani, Rohat ko'chasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani, Al-Xorazmiy ko'chasi, 3/1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yangihayot tumani, Choshtepa ko'chasi, 398 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, Аli Qushchi ko'chasi, 2 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yangihayot tumani, 4 kvartal, Yldosh massivi, 40 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Olmazor tumani, Farobiy ko'chasi, 382/1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Chilonzor tumani,Cho'ponota ko'chasi, 57 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Yunusobod tumani, Yangi Yunusobod ko‘chasi, 17 mavze",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Uchtepa tumani, 15 dahasi, Faziltepa ko‘chasi, 23A uy.",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Mirzo ulug‘bek tumani, Mo‘minov ko‘chasi, 7/2 uy",
        hasFittingRoom: false,
        workHours: {
            mon_fri: "09:00 - 13:00, 14:00 - 18:00",
            sat_sun: "Dam olish"
        }
    },
    {
        address: "Toshkent sh., Mirobod tumani, Sarakul ko'chasi, 1 uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    },
    {
        address: "Toshkent sh., Shayxontohur tumani, Labzak ko‘chasi, 28A uy",
        hasFittingRoom: true,
        workHours: {
            mon_sun: "10:00 - 20:00"
        }
    }
];

let week = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba"
]

const DeliveryPoints = () => (
    <>
        <Uzum />
        <div className="my-10 mx-auto w-300 px-5 flex">
            <div className="w-1/4 flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Uzum</h2>
                <div className="flex flex-col gap-3">
                    <Link to={"/uz/about/delivery-points"} className="text-gray-500">Topshirish punktlari</Link>
                    <Link to={"/uz/about/careers"}>Vakansiyalar</Link>
                </div>
            </div>
            <div className="w-full h-screen p-10 border border-gray-400 flex">
                <div className="w-4/9 h-full">
                    <h1 className="text-3xl font-bold pb-3">Topshirish punkti</h1>
                    <div className="w-full h-95/100 flex flex-col gap-5 overflow-y-auto">
                        {pickupPoints.map((point, i) => (
                            <div key={i}>
                                <h3 className="text-xl font-bold">{point.address}</h3>
                                <div className="text-gray-400 border-b border-gray-200 flex flex-col gap-3">
                                    <div className="flex gap-1"><FontAwesomeIcon icon={faShirt} /> <div>Kiyib ko'rish joyi {point.hasFittingRoom ? "bor" : "yo'q"}</div></div>
                                    <div className="flex gap-1"><FontAwesomeIcon icon={faLocationDot} /><div>{point.address}</div></div>
                                    <div className="flex gap-1">
                                        <FontAwesomeIcon icon={faClock} />
                                        <div className="w-max flex flex-col">
                                            {week.map((day, i) => (
                                                <div key={i} className="flex justify-between gap-5">
                                                    <span>{day}</span>
                                                    <span className="text-gray-600">{point.workHours.mon_sun ?? point.workHours.mon_fri}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-full">
                    <MyMap
                        height="100%"
                        width="100%"
                        latitude={41.2995}
                        longitude={69.2401}
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default DeliveryPoints