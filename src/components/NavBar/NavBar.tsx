import './NavBar.css'
export function NavBar({logoBuscar}:{logoBuscar:boolean}) {
    return (
        <>
            <div className="navbar">
                <img
                    src="../src/images/Netflix_Logo_RGB.png"
                    alt="Netflix Logo"
                />
                {logoBuscar && (<i className="fa-solid fa-magnifying-glass"></i>)}
            </div>
        </>
    )
}