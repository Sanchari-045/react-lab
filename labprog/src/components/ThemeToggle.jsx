import { useState } from "react";
export default function ThemeToggle() {
    const[isDark ,setIsDark]=useState(false);
    const themeClass = isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
    return (
        <div className={`${themeClass} min-h-screen w-screen flex items-center justify-center`}>
            <div className="text-center bg-white/10 p-10 rounded-2x1 shadow-x1">
            <h1 className="text-3x1 font-bold mb-4">{isDark ? "Dark mode🌙" : "Light Mode🌞"}</h1>
            <p className="mb-6 text-lg">Click the button to switch themes🌓.</p>
            <button onClick ={() => setIsDark(!isDark)} className="px-6 py-2 e rounded-lg font-semibold bg-blue-500 text-whit hover:bg-blue-600"> Switch Theme </button>
            </div>
            </div>
    )
}
