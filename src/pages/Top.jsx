import Cards from "../components/Cards"
function Top() {
    return (
        <>
            <div className="m-5 border border-white w-max flex">
                <div className="">
                    <div>
                        <div className="text-xl"> Turkumlar</div>
                        <div className="text-sm border border-white w-max p-1 pl-2 rounded-md hover:border-gray-400 hover:bg-gray-400">elektronika</div>
                    </div>
                    <div className="text-xl font-bold mt-4">Narx,Baxo,So'm</div>
                    <div>
                        <div className="text-xl mt-7 mb-3">O'rnatilgan xotira GB </div>
                        <div>
                            <div><input type="checkbox" className="mr-2" />1024</div>
                            <div><input type="checkbox" className="mr-2" />128</div>
                            <div><input type="checkbox" className="mr-2" />16</div>
                            <div><input type="checkbox" className="mr-2" />256</div>
                            <div><input type="checkbox" className="mr-2" />32</div>
                            <div><input type="checkbox" className="mr-2" />512</div>
                            <div><input type="checkbox" className="mr-2" />64</div>
                        </div>
                        <div>
                            <div className="text-xl mt-5 mb-3">Ekran diagonali</div>
                            <div>
                                <div><input type="checkbox" className="mr-2" />3.4 gacha</div>
                                <div><input type="checkbox" className="mr-2" />3.4" dan 4.4" gacha</div>
                                <div><input type="checkbox" className="mr-2" />5" dan 5.4" gacha</div>
                                <div><input type="checkbox" className="mr-2" />5.5" dan 5.9" gacha</div>
                                <div><input type="checkbox" className="mr-2" />6" dan 6.4" gacha</div>
                                <div><input type="checkbox" className="mr-2" />6.5" dan</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl mt-5 mb-3">Qurilma modeli</div>
                            <div>
                                <div><input type="checkbox" className="mr-2" />DIGOS R67</div>
                                <div><input type="checkbox" className="mr-2" />Galaxy S25 FE</div>
                                <div><input type="checkbox" className="mr-2" />Honor 400</div>
                                <div><input type="checkbox" className="mr-2" />Honor 400 Lite</div>
                                <div><input type="checkbox" className="mr-2" />Honor 400 Pro</div>
                                <div><input type="checkbox" className="mr-2" />Honor X5c</div>
                            </div>
                        </div>
                         <div>
                            <div className="text-xl mt-5 mb-3">Operativ xotira, Gb</div>
                            <div>
                                <div><input type="checkbox" className="mr-2" />2</div>
                                <div><input type="checkbox" className="mr-2" />3</div>
                                <div><input type="checkbox" className="mr-2" />4</div>
                                <div><input type="checkbox" className="mr-2" />6</div>
                                <div><input type="checkbox" className="mr-2" />8</div>
                                <div><input type="checkbox" className="mr-2" />12</div>
                            </div>
                        </div>
                         <div>
                            <div className="text-xl mt-5 mb-3">Operativ xotira, Gb</div>
                            <div>
                                <div><input type="checkbox" className="mr-2 border border-amber-800 bg-amber-800 rounded-full" />Jigarrang</div>
                                <div><input type="checkbox" className="mr-2" />qizil</div>
                                <div><input type="checkbox" className="mr-2" />yashil</div>
                                <div><input type="checkbox" className="mr-2" />Xaki</div>
                                <div><input type="checkbox" className="mr-2" />binafsha</div>
                                <div><input type="checkbox" className="mr-2" />pushti</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl mt-5 mb-3">Autentifikatsiya</div>
                            <div>
                                <div><input type="checkbox" className="mr-2" />Yuzni aniqlash </div>
                                <div><input type="checkbox" className="mr-2" />Barmoq izi skaneri</div>
                                <div><input type="checkbox" className="mr-2" />Ko'zning to'r pardasini aniqlash</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-xl mt-5 mb-3">Operativ xotira, Gb</div>
                            <div>
                                <div><input type="checkbox" className="mr-2 " />W&O</div>
                                <div><input type="checkbox" className="mr-2" />Apple</div>
                                <div><input type="checkbox" className="mr-2" />Corn</div>
                                <div><input type="checkbox" className="mr-2" />Honor</div>
                                <div><input type="checkbox" className="mr-2" />HTS</div>
                                <div><input type="checkbox" className="mr-2" />Huawei</div>
                            </div>
                        </div>
                         <div>
                            <div className="text-xl mt-5 mb-3">Ishlab chiqarish mamlakati </div>
                            <div>
                                <div><input type="checkbox" className="mr-2 " />Vyetnam</div>
                                <div><input type="checkbox" className="mr-2" />Hindiston, Vyetnam, Pokiston, Urugvay, Argentina, Myanma</div>
                                <div><input type="checkbox" className="mr-2" />Xitoy</div>
                                <div><input type="checkbox" className="mr-2" />AQSH</div>
                                <div><input type="checkbox" className="mr-2" />Janubiy Koreya</div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-200">
                    <Cards/>
                </div>
            </div>
        </>
    )
}
export default Top