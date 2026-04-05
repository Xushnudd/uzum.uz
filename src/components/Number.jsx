import { useState, useRef } from "react";

function PhoneInput() {
    const [value, setValue] = useState("+998 ");
    const inputRef = useRef(null);

    const formatPhone = (input) => {
        let digits = input.replace(/\D/g, "");

        if (digits.startsWith("998")) {
            digits = digits.slice(3);
        }

        digits = digits.substring(0, 9); // maksimal 9 raqam

        let part1 = digits.substring(0, 2);
        let part2 = digits.substring(2, 5);
        let part3 = digits.substring(5, 7);
        let part4 = digits.substring(7, 9);

        let formatted = "+998 ";
        if (part1.length) formatted += part1;
        if (part2.length) formatted += " " + part2;
        if (part3.length) formatted += "-" + part3;
        if (part4.length) formatted += "-" + part4;

        return formatted;
    };

    const handleChange = (e) => {
        let input = e.target.value;
        if (!input.startsWith("+998")) input = "+998 ";
        const formatted = formatPhone(input);
        setValue(formatted);

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.selectionStart = inputRef.current.selectionEnd = formatted.length;
            }
        }, 0);
    };

    const handleKeyDown = (e) => {
        if (e.target.selectionStart <= 4 && e.key === "Backspace") {
            e.preventDefault();
        }
    };

    return (
        <div className="bg-white p-5 pt-2 rounded-2xl w-100 m-5 border ">
            <div className=" text-purple-600 text-xl flex justify-center font-bold mb-10 mt-4">
              <img src="./uzum2.png" alt="" className="w-7 mr-2" />  uzum ID
            </div>
            <div className="text-2xl font-semibold mb-5 flex justify-center ">
                Uzum Market’ga kirish
            </div>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="+998 00 000-00-00"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-200 text-xl outline-none mb-7"
            />
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold mb-18">
                Kodni olish
            </button>
           
              <div className="text-sm text-gray-600 flex justify-center ">  Davom etgan holda men</div>
                  <u className="text-sm text-gray-600 flex justify-center">shaxsiy ma'lumotlarni qayta ishlash siyosatiga
                rozilik</u> <u className="text-sm text-gray-600 flex justify-center ">bildiraman va Uzum ID ommaviy oferta bilan rozi 
            </u>
            <u className="text-sm text-gray-600 flex justify-center ">bo‘laman</u>
            <u className="text-sm text-gray-600  flex justify-center mt-2">Uzum ID nima? </u>

        </div>
    );
}

export default PhoneInput;