import Card from "./Card"

function Cards() {
    function cards(n) {
        let a = []
        for (let i = 0; i < n; i++) {
            a.push(<Card disPrice={2787400} price={3000000} inMonth={160000} about={" Top laptop brands include Apple, Dell, Lenovo, HP, ASUS, and Acer, offering popular series like MacBook Air, XPS, ThinkPad, Pavilion, and Vivobook. For personalized, creative naming, users often"} picture={"/laptop.avif"} />)
        }
        return a;
    }
    return (
        <div className="flex justify-between flex-wrap">
            {cards(25)}
        </div>
    )
}
export default Cards