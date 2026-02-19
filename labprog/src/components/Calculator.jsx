import { useState } from "react";
export default function Calculator(){
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const number1 = parseFloat(num1) || 0 ;
    const number2 = parseFloat(num2) || 0 ;
    const addition = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number2 !== 0 ? (number1 / number2).toFixed(2):"Infinity";
    return(
        <div className="bg-white shadow-xl rounded-2x1 p-8 w-96">
            <h1 className="text-2xl font-bold text-center mb-6">Real-Time Calculator</h1>
            <input type="number" placeholder="Enter first number" value={num1} 
            onChange={(e) => setNum1(e.target.value)} className="w-full mb-4 p-2 border rounded-1g"
            />
            <input type="number" placeholder="Enter second number" value={num2}
            onChange={(e) => setNum2(e.target.value)} className="w-full mb-6 p-2 border rounded-1g"
            />
            <div className="space-y-2 text-lg">
                <p>➕ Addition: <span className="font-semibold">{addition}</span></p>
                <p>➖ Subtraction: <span className="font-semibold">{subtraction}</span></p>
                <p>✖️ multiplication: <span className="font-semibold">{multiplication}</span></p>
                <p>➗ Division: <span className="font-semibold">{division}</span></p>
            </div>
        </div>
    )
}