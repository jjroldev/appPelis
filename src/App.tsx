import "./App.css";
import "react-multi-carousel/lib/styles.css";
export const URL_IMAGE_POSTER = "https://image.tmdb.org/t/p/w500";
export const URL_IMAGE_BACKDROP = "https://image.tmdb.org/t/p/w780";
export const URL_IMAGE_BANNER = "https://image.tmdb.org/t/p/original";
export const URL_IMAGE_PROFILE = "https://image.tmdb.org/t/p/h632";
export const URL_IMAGE_lOGO = "https://image.tmdb.org/t/p/w500";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "85d5fd78d8d1befad8c1afdad9cd0418";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy} from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";
const Buscar = lazy(() => import("./components/Buscar/Buscar"));
const Home = lazy(() => import("./components/Home/Home"));
const InfoMovie = lazy(() => import("./components/InfoMovie/InfoMovie"));
function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/appPelis">
        <Suspense
          fallback={
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="spinner"></div>
            </div>
          }
        >
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/buscar" element={<Buscar />} />
            <Route path="/info" element={<InfoMovie />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

