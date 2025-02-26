import './Logo.css'
export default function Logo({ logoGrande }: { logoGrande?: boolean }) {
    return (
        <>
            <img
                src="/appPelis/JUSTFLIX3.png"
                alt="Logo"
                className={`${logoGrande ? "logoGrande" : "logo"}`}
            />
        </>
    )
}