import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import ThemeToggle from "./components/ThemeToggle";
import ColorPicker from "./components/ColorPicker";
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Tabs />} />
      <Route path="/" element={<ThemeToggle />} />
      <Route path="/" element={<ColorPicker />} />
     </Routes>
     </BrowserRouter>
  )
}
export default App