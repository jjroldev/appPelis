import './Actors.css'
import '../../components/Lupa/Lupa.css'
import { lazy, useState, useMemo, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useLanguage } from '../../context/LanguageContext';
import { fetchData } from '../../utils/fetchData';
import { getURLPopularActors, getURLSearchActors } from '../../utils/endPoints';
import { Card } from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { useMenu } from '../../context/MenuContext';
const BarMenu = lazy(() => import('../../components/BarMenu/BarMenu'));

export default function Actors() {
    const [nameActor, setNameActor] = useState(() => sessionStorage.getItem('nameActor') || "");
    const { language } = useLanguage()
    const { setOpenMenu } = useMenu()

    const inputRef = useRef<HTMLInputElement>(null);

    const { data, isLoading } = useQuery(

        `actors-${nameActor}-${language}`,
        () => fetchData(getURLSearchActors(nameActor, language))
    );

    const { data: popularData, isLoading: isLoadingP } = useQuery(
        `actorsPopulars`,
        () => fetchData(getURLPopularActors(language))
    );

    const filteredActors = useMemo(() => {
        const actors = nameActor !== "" ? data?.results || [] : popularData?.results || [];
        return actors.filter((actor: any) => actor?.profile_path);
    }, [data, popularData, nameActor]);

    useEffect(() => {
        sessionStorage.setItem('nameActor', nameActor);
    }, [nameActor]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setOpenMenu(false);
    }, []);

    return (
        <>
            <BarMenu />
            <div className="contenedorActors">
                <form id="busqueda" onSubmit={(e) => e.preventDefault()}>
                    <div className="contenedorLupa">
                        <input
                            ref={inputRef}
                            id="busqueda-input"
                            type="text"
                            className="lupaMovile"
                            placeholder='Search actors'
                            onChange={(e) => setNameActor(e.target.value)}
                            value={nameActor}
                        />
                        <i className="fa-solid fa-magnifying-glass lupaIcono"></i>
                        <button type="submit" style={{ display: 'none' }} />
                    </div>
                </form>

                <div
                    className={`wrapper-actors w-full ${isLoading || isLoadingP || filteredActors.length === 0
                            ? '!flex items-center justify-center'
                            : ''
                        }`}
                >
                    {isLoading || isLoadingP ? (
                        <Loader />
                    ) : filteredActors.length > 0 ? (
                        filteredActors.map((actor: any) => (
                            actor?.profile_path && <Card key={actor.id} castMember={actor} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-4 w-full">No results found</p>
                    )}
                </div>
            </div>
        </>
    );
}
