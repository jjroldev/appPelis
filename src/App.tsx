
import "./App.css";
import "react-multi-carousel/lib/styles.css";
export const URL_IMAGE = "https://image.tmdb.org/t/p/original";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "6e6a632ff00b90c42dadea3c48a464ab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { useState } from "react";
import { Buscar } from "./components/Buscar/Buscar";
function App() {
  const [language, setLanguage] = useState<string>("es");
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home language={language} />} />
        <Route index path="/buscar" element={<Buscar language={language}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
