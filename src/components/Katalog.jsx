import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function Katalog({ on }) {
    if (!on) {
        return null
    }

    function city(m = []) {
        return m.map((city, i) => (
            <div key={i} className="w-full border-b border-gray-400 p-1 text-xl flex justify-between duration-500 hover:bg-gray-200">
                <span>{city}</span>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        ))
    }

    let cityList = [
        "Abdukarim", "Ahmad Yassaviy", "Alaja", "Alamli", "Altinko'l (Qo'ng'irot tumani)",
        "Andijon", "Angor", "Angren", "Anhorli", "Arabon", "Arabxona", "Arsif", "Asaka",
        "Asqar", "Avval", "Ayvalik", "Azizobod", "Babalakota", "Baland Gardiyon", "Baliqchi",
        "Balta", "Bandixon", "Bardanko'l", "Batosh", "Baxt", "Baynalmilal", "Bekat", "Bekobod",
        "Bekobod (Bog'dod tumani)", "Bereshum", "Beruni", "Beruniy (Qiyichirchiq tumani)",
        "Beshariq", "Beshbuloq", "Beshkapa", "Beshkent", "Beshrabod", "Beshtuva", "Birlik",
        "Bo'jay", "Bo'ka", "Bo'rbaliq", "Bo'ston", "Bo'ston (Ellikqali tumani)",
        "Bo'ston (Oltinsoy tumani)", "Bo'ston (Zarbdor tumani)", "Bog'dod", "Bog'iturkon",
        "Bog'izag'on", "Bog'ot", "Bogdan", "Boyovut", "Boysun", "Buloqboshi", "Bulung'ur",
        "Bunyodkor", "Burchmullo", "Buston (Bo'ka tumani)", "Buvayda", "Buxoro", "Chandir",
        "Changi", "Chanoq", "Charxin", "Chekshura", "Chelak", "Chibintepa", "Chimboy",
        "Chimyon", "Chimyon", "Chinabod", "Chinoz", "Chirchiq", "Chiroqchi", "Cho'rindi",
        "Chodak", "Chorbog'", "Chorraha", "Chorshanbe", "Chortoq", "Chortoq (Guliston tumani)",
        "Chorvoq", "Chorvoqguzar", "Chulkuvar", "Chust", "Chuuya", "Chuvalachi", "Chuvama",
        "Dahbed", "Dalvarzin (Andijon viloyati)", "Dalvarzin (Toshkent viloyati)", "Dangir",
        "Dangara", "Dasht", "Dashtobod", "Deggaron", "Dehoji", "Dehqonobod",
        "Dehqonobod (Qashqadaryo viloyati)", "Denov", "Denov (Shafirqon tumani)", "Do'rmon",
        "Do'stlarobod", "Do'stlik", "Do'stlik (Denov tumani)", "Do'stlik (Guliston tumani)",
        "Do'stlik (Uzun tumani)", "Do'stobod", "Dusimbiy", "Egizbuloq", "Erkin", "Eshmatoul",
        "Eshonguzor", "Farg'ona", "Farxod", "Fayziobod", "Forish", "Furqat", "G'alaba",
        "G'allaorol", "G'o's", "G'oliblar", "G'uzor", "Gagarin", "Galaosiya", "Galaquduq",
        "Gazgan", "Geofizika", "Gijduvon", "Gul", "Gulbahor", "Guliston",
        "Guliston (Yuqorichirchiq tumani)", "Guliston (Zangiota tumani)", "Gullanbog'",
        "Gulobod", "Gulobod", "Gulobod (Surxondaryo viloyati)", "Gulzar", "Gulzar (Paxtakor tumani)",
        "Gurlan", "Gurumsaroy", "Guvalak", "G'azalkent", "Hamzaobod", "Hasanboy", "Hayit",
        "Hayotobod", "Hisorak", "Humson", "Ibrat", "Iftixor", "Iftixor (Muzrabot tumani)",
        "Ijant", "Ishtixon", "Ispanza", "Istiqlol", "Ittifoq", "Izboskan", "Jag'albaïly",
        "Jalaquduq", "Jambul", "Jangaboy", "Jaqtiliq", "Jarqo'rg'on", "Jartepa", "Jayraxona",
        "Jeynov", "Jilva", "Jizzax", "Jizzaxlik", "Jo'ynav", "Jomboy", "Jondor", "Juma",
        "Jumabazar (Bekobod tumani)", "Jumabazar (Olot tumani)", "Jumabazar (Yuqori Chirchiq tumani)",
        "Jumashuy", "Jurek", "Juren", "Kakaydi", "Kalkonota (Navbaxor tumani)", "Kangli",
        "Kanimex", "Kaptarxona", "Karamaz", "Kara Oy", "Karkidan", "Karmana", "Kattaqo'rg'on",
        "Katta Ramadon", "Kavola Mahmud", "Kegayli", "Kelauchi", "Keles", "Kitob", "Ko'hna Kalon",
        "Ko'kcha", "Ko'kdala", "Ko'kterak", "Ko'k-Terak", "Kogon", "Kosari", "Koson", "Kosonsoy",
        "Ko'hna Sho'rcha", "Ko'ksaroy", "Krasnogorsk", "Kuliyan", "Kulob", "Kulonxona", "Kumarik",
        "Kuyganyor", "Kuyganyor", "Kuyun", "Labiro'd", "Lagan", "Lagandi", "Lalmiqor", "Lolazor",
        "Loyish", "Madaniyat", "Mahallai-Mirishkor", "Malikrabot", "Mallaboy", "Mang'it",
        "Marg'ilon", "Marhamat", "Marjonbuloq", "Markaz", "Mash'al", "Mashak", "Maymanoq",
        "Mindon", "Mindonobod", "Mingchinor", "Mirbozor", "Mirmiron", "Miroqi", "Misr",
        "Mitan", "Mo'ynoq", "Muborak", "Mug'lon", "Mulkanlik", "Mulloyon", "Muratali",
        "Muruntov", "Mustaqillik", "Mustaqillik (Pskent tumani)", "Namangan", "Namdanak",
        "Namuna", "Nanay", "Narpay (Karmana tumani)", "Navbahor", "Navbahor (Namangan tumai)",
        "Navoiiy", "Navoiy", "Navro'z", "Navro'z (Yuqorichirchiq tumani)", "Nazarbek",
        "Niyozbash", "Norinkapa", "Novaboshi", "Novkent", "Novmetan", "Nukus", "Nurafshon",
        "Nuriston", "Nurobod", "Nurobod (Ohangaron tumani)", "Nurota", "O'rmonbek", "O'rta Oqchi",
        "O'rtaovul", "O'rtaovul", "O'rtasaroy", "O'rtayap", "O'zbekiston",
        "O'zbekiston (Qashqadaryo viloyati)", "Odil", "Ohangaron", "Olimkent", "Olmaliq",
        "Olmazor (Chinoz tumani)", "Olmos", "Olot", "Oltiariq", "Oltinariq", "Oltinko'l",
        "Oqmang'it", "Oqoltin", "Oqqovoq", "Oqqorg'on", "Oqtosh", "Otchopar", "Oyim",
        "Ozod Vatan (Muzrobod tumani)", "Parchanxas", "Pargos", "Parkent", "Paxta (Chinoz tumani)",
        "Paxtachi", "Paxtakor", "Paxtaobod", "Paxtaobod (Sardoba tumani)", "Paxtazor",
        "Payariq", "Payshanba", "Pishagar", "Piskent", "Pitnak", "Pop", "Poshxurt", "Povulgon",
        "Poytug'", "Qahramon", "Qamashi", "Qanliko'l", "Qaqir", "Qaravul", "Qarshi", "Qashqari",
        "Qatartol", "Qat-Qal'a", "Qayqi", "Qibray", "Qilichinok", "Qipchaq", "Qirarik", "Qiyot",
        "Qizilariq", "Qizilqo'rg'on", "Qizil Shalola", "Qiziltepa", "Qo'shtegirmon", "Qo'g'ali",
        "Qo'g'ay", "Qo'ng'irot", "Qo'qonboy", "Qo'rg'oncha", "Qo'rg'ontepa", "Qo'shkupir",
        "Qo'shqo'rg'on", "Qo'shrobod", "Qo'shtepa", "Qodirist", "Qoraboy", "Qorabug'", "Qorako'l",
        "Qoranko'l", "Qorao'zak", "Qoraqo'yli", "Qoraqushchi", "Qoraqushxona", "Qorashina",
        "Qorasuv", "Qorasuv (Qo'rg'ontepa tumani)", "Qorato'be", "Qora Xitoy", "Qorayantoq",
        "Qorovulbozor", "Qosh Yog'och", "Qozonkekten", "Qo'qon", "Qo'shtepa (Andijon viloyati)",
        "Quduqcha", "Qumariqobod", "Qumqo'rg'on", "Qunduzyak", "Qurama (Andijon tumani)",
        "Qurama (Oltinsoy tumani)", "Qurbonov", "Quva", "Quvasoy", "Quyaboshi", "Rapqon",
        "Ravot (Samarqand viloyati)", "Rishton", "Romitan", "Rovot", "Sabzikor", "Salar",
        "Samarqand", "Samarqandquduq", "Sanam", "Sang", "Sarbozor", "Sardoba", "Sariasiya",
        "Sarik (Qiziriq tumani)", "Sari Qangli", "Saritepa", "Sasbaka", "Sayrob Chinor",
        "Sayxun", "Shahand", "Shahrisabz", "Shahrixon", "Shamaton", "Shampan", "Sharg'un",
        "Sherobod", "Shirin", "Shix", "Shiхmashhad", "Sho'ralisoy", "Sho'rchi",
        "Shodlik (Oqoltin tumani)", "Shofirkon", "Shohidonlar", "Shorko'l", "Shovot", "Shoyimbek",
        "Shumanay", "Sijjak", "Sirdaryo", "So'fon", "So'lti", "Sohibkor", "Sohil", "Soyliq",
        "Sukok", "Sultonobod", "Sulton Segizboyev", "Sutkibuloq", "Talimarjon", "Talkok",
        "Talloshqon", "Tamabahrin", "Tarnov", "Taskent", "Tavois", "Taxiatosh", "Taxtako'pir",
        "Temirkovuk", "Temirxo'ja", "Teraktagi", "Terakzor", "Tergachi", "Termiz", "Timiryazev",
        "Tinchlik", "To'qboy", "To'rtayg'ir", "To'rtko'l", "Toshbuloq", "Toshkent", "Toshloq",
        "Toshloq (Qiyichirchiq tumani)", "Toyloq", "To'raqo'rg'on", "Tulga", "Turg'oq", "Turkmen",
        "Tutzor", "Tuyabo'g'iz", "Uchko'prik", "Uchqizil", "Uchqo'rg'on", "Uchquduq", "Uchquloch",
        "Uchtepa", "Ulug'bek", "Umar", "Unqo'rg'on", "Unxayat", "Uramas", "Urganch", "Urgut",
        "Usmat", "Usmon Nosir", "Uychi", "Uzilishkent", "Uzun", "Vangozi", "Vaxshivor",
        "Vobkent", "Vodil", "Xalkobod", "Xalkobod (Kegayli tumani)", "Xalkobod (Yangiyo'l tumani)",
        "Xanka", "Xaqqulobod", "Xazarasp", "Xitoyan", "Xiva", "Xo'jaabdujabbar (Chiroqchi tumani)",
        "Xo'ja Axrori Vali", "Xo'jaobod", "Xo'jarabot", "Xo'jasoat", "Xo'jikent (Bo'stonliq tumani)",
        "Xoja Yakshabo", "Xonbandi", "Xonobod", "Xonobod (Namangan tumani)", "Xonziq",
        "Xorkash", "Xos", "Xovos", "Xo'ja Yaqshba", "Xo'jayli", "Xo'jaqishloq", "Xo'jaqo'rg'on",
        "Xusnobod", "Xvan Man G'im", "Yakkabog'", "Yallama", "Yangiarik", "Yangibino",
        "Yangibozor", "Yangibozor (Peshku tumani)", "Yangibozor (Yangibozor tumani)",
        "Yangi Chinoz (Chinoz tumani)", "YangiHayot (Qiyichirchiq tumani)", "Yangi Hazorbog'",
        "Yangi Kuch", "Yangi Marg'ilon", "Yangi Mirishkar", "Yangi Nishon", "Yangiobod",
        "Yangiobod (Angor tumani)", "Yangiobod (Bo'ka tumani)", "Yangiovul", "Yangiqo'rg'on",
        "Yangirabat", "Yangi-Tamdi", "Yangixayot (O'rtachirchiq tumani)", "Yangiyer",
        "Yangiyo'l", "Yarkin", "Yaypan", "Yom", "Yoshlarobod", "Yozyovon", "Yukari-Og'alik",
        "Yuqori Bachqir", "Yuqori-Machay", "Yuqori Valik", "Zafar", "Zafarobod",
        "Zafarobod (Konimex tumani)", "Zahlik", "Zangiota", "Zarafshon", "Zarbdor", "Zarkent",
        "Zarkent (Farg'ona viloyati)", "Zartepa", "Zavrok", "Zhaloyir", "Ziyodin", "Ziyokor", "Zomin"
    ];

    return (
        <div className="absolute z-20 inset-0 w-screen h-screen bg-gray-300/50 flex justify-center items-center">
            <div className="bg-white border border-black shadow-2xl w-150 h-150 rounded-2xl">
                <div>
                    <div className="w-full flex">
                        <div className="font-bold text-2xl pr-15 pl-10 mt-5">
                            <span>Shaharni Tanlang</span>
                            <i class="fa-solid fa-circle-xmark mt-2 pl-75"></i>
                        </div>
                    </div>
                    <div className="mx-auto w-130 h-10 bg-gray-300 flex gap-2 items-center text-xl rounded-xl">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-full text-gray-500" />
                        <input type="text" placeholder=" Shaharni topish" className="w-full h-full focus:outline-none" />
                    </div>
                </div>
                <div className="w-full px-10 h-8/10 overflow-y-auto">
                    {city(cityList)}
                </div>
            </div>
        </div>
    )
}
export default Katalog