function Banner() {
    return (
        <>
            <div class="w-full px-4 py-2 font-sans">

                <div class="flex items-center justify-between overflow-x-auto no-scrollbar py-3 gap-6 text-[13px] text-gray-700 whitespace-nowrap">
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0">
                        <img src="https://img.icons8.com/color/48/hot-article.png" class="w-4 h-4" alt="" />
                            <span>Hafta tovarlari</span>
                    </a>
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0">
                        <img src="https://img.icons8.com/color/48/blossom.png" class="w-4 h-4" alt="" />
                            <span>Bahorgi kolleksiya</span>
                    </a>
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0 text-[#7000ff] font-medium">
                        <img src="https://img.icons8.com/color/48/cosmetic-brush.png" class="w-4 h-4" alt="" />
                            <span>Sizning go'zalligingiz</span>
                    </a>
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0">
                        <img src="https://img.icons8.com/color/48/guitar.png" class="w-4 h-4" alt="" />
                            <span>Xobbi va ijod</span>
                    </a>
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0">
                        <img src="https://img.icons8.com/color/48/smartphone.png" class="w-4 h-4" alt="" />
                            <span>Smartfonlari</span>
                    </a>
                    <a href="#" class="flex items-center gap-1.5 hover:text-black shrink-0">
                        <img src="https://img.icons8.com/color/48/mosque.png" class="w-4 h-4" alt="" />
                            <span>Ramazon oyi</span>
                    </a>
                    <a href="#" class="hover:text-black shrink-0 text-gray-400">Mebel</a>
                    <a href="#" class="hover:text-black shrink-0 text-gray-400">Turizm, baliq ovi va ovchilik</a>
                    <button class="text-gray-400 flex items-center gap-1 shrink-0">Yana <i class="fa-solid fa-chevron-down text-[10px]"></i></button>
                </div>

                <div class="relative group mt-2 rounded-2xl overflow-hidden bg-gradient-to-r from-[#5a00c8] via-[#7000ff] to-[#d686ff] h-[350px] flex items-center px-12">

                    <div class="z-10 max-w-lg">
                        <h1 class="text-white text-6xl font-black uppercase leading-tight tracking-tighter italic">
                            SOVG'ALAR <br /> XONASI
                        </h1>
                        <p class="text-white text-xl mt-6 font-medium">Hamyonbop sovg'alarga ega</p>

                        <a href="#" class="inline-flex items-center gap-2 bg-[#24A1DE] text-white px-6 py-3 rounded-full mt-4 font-bold text-lg hover:bg-opacity-90 transition-all">
                            <i class="fa-brands fa-telegram text-2xl"></i>
                            telegram—bot
                        </a>
                    </div>

                    <div class="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-end p-8 pointer-events-none">
                        <img src="https://uzum.uz/static/img/main-page/spring-flowers.png" class="h-[90%] object-contain" alt="" />
                    </div>

                    <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>

                    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div class="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                        <div class="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-4 mt-4">
                    <div class="bg-gray-100 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors">
                        <span class="text-2xl">🧸</span>
                        <span class="text-sm font-medium text-gray-800">Onalar va bolalar uchun</span>
                    </div>
                    <div class="bg-gray-100 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors border-2 border-transparent hover:border-[#7000ff]/20">
                        <span class="bg-[#ff0066] text-white p-1 rounded text-xs leading-none">✔️</span>
                        <span class="text-sm font-medium text-gray-800">Arzon narxlar kafolati</span>
                    </div>
                    <div class="bg-gray-100 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors">
                        <span class="text-2xl">🧥</span>
                        <span class="text-sm font-medium text-gray-800">Zamonaviy bozor</span>
                    </div>
                    <div class="bg-gray-100 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors">
                        <span class="text-2xl">🌸</span>
                        <span class="text-sm font-medium text-gray-800">8-mart</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner