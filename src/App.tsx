
import "./App.css";
import "react-multi-carousel/lib/styles.css";
export const URL_IMAGE_POSTER = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_BACKDROP = "https://image.tmdb.org/t/p/w780";
export const URL_IMAGE_BANNER = "https://image.tmdb.org/t/p/original";
export const URL_IMAGE_PROFILE = "https://image.tmdb.org/t/p/h632";
export const URL_IMAGE_lOGO = "https://image.tmdb.org/t/p/w500";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "7b3eb704908cad196b55f47390040305";
import { InfoMovie } from "./components/InfoMovie/InfoMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { useState } from "react";
import { Buscar } from "./components/Buscar/Buscar";
function App() {
  const [language, setLanguage] = useState<string>("en");
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home language={language} />} />
        <Route path="/buscar" element={<Buscar language={language}/>} />
        <Route path="/info" element={<InfoMovie />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
