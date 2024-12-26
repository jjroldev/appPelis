
import "./App.css";
import "react-multi-carousel/lib/styles.css";
export const URL_IMAGE = "https://image.tmdb.org/t/p/original";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "6e6a632ff00b90c42dadea3c48a464ab";
import { Home } from "./components/Home/Home";
import { Buscar } from "./components/Buscar/Buscar";
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState<string>("en");
  return (
    <>
    <Home language={language}/>
    </>
  );
}

export default App;
