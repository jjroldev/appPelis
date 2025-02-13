import './Logo.css'
import { Helmet } from "react-helmet"
export default function Logo({ logoGrande }: { logoGrande?: boolean }) {
    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href="/appPelis/JUSTFLIX.svg" />
            </Helmet>
            <img
                src="/appPelis/JUSTFLIX.svg"
                alt="Logo"
                className={`${logoGrande ? "logoGrande" : "logo"}`}
            />
        </>
    )
}