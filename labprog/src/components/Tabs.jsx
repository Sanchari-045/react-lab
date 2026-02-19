import { useState } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("home");
    return (
        <div className="min-h-screen items-center p-6 flex justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-96">
                <div className="flex justify-around mb-6">
                    <button onClick={() => setActiveTab("home")}
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        Home
                    </button>
                    <button onClick={() => setActiveTab("about")}
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "about" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        About
                    </button>
                    <button onClick={() => setActiveTab("contact")}
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "contact" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        Contact
                    </button>
                </div>
                <div className="text-center text-lg">
                    {activeTab === "home" && <p>😊Welcome to the Home Page!</p>}
                    {activeTab === "about" && <p>Learn more About Us🤗.</p>}
                    {activeTab === "contact" && <p>Get in touch with us on the Contact Page🤙📞</p>}
                </div>
            </div>
        </div>
    );
}