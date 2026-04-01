import Card from "./Card"
function Card2() {
    return (
        <>
            <div className="font-bold text-2xl">Arzon narxlar kafolati</div>
            <div className="w-full flex overflow-x-auto">
                <Card disPrice={2787400} price={3000000} inMonth={160000} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"laptop.avif"} />
                <Card disPrice={1245000} price={1500000} inMonth={34900} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"phone.png"} />
                <Card disPrice={34000} price={45000} inMonth={5000} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"chair.webp"} />
                <Card disPrice={120000} price={150900} inMonth={19000} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"image copy.png"} />
                <Card disPrice={20000} price={35000} inMonth={3500} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"gun.webp"} />
            </div>
        </>
    )
}
export default Card2