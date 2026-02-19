import { useState } from "react";   
export default function ColorPicker(){
    const [color, setColor] = useState("bg-gray-300");
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h2 className="text-2x1 font-bold">SIMPLE COLOUR</h2>
            <div className={`w-48 h-48 rounded-x1 ${color}`}></div>
            <div className="Flex gap-4">
                <button onClick={()=> setColor("bg-red-500")}
                className="px-4 py-2 bg-red-500 text-black rounded-1g">RED</button>
                <button onClick={()=> setColor("bg-blue-500")}
                className="px-4 py-2 bg-blue-500 text-black rounded-1g">BLUE</button>
                <button onClick={()=> setColor("bg-green-500")}
                className="px-4 py-2 bg-green-500 text-black rounded-1g">GREEN</button>
        </div>
        </div>
    )
}