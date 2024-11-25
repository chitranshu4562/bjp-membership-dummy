import classes from "./NavLinkContainer.module.css";
import NavLink from "../nav-link/NavLink.jsx";

export default function NavLinkContainer({ title, links }) {
    return (
        <>
            {title && <p className={classes.title}>{title}</p>}
            <div className={classes.navLinkContainer}>
                {links.map((link) => (
                    <NavLink key={link} content={link}/>
                ))}
            </div>
        </>
    )
}
