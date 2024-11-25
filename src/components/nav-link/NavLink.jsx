import classes from "./NavLink.module.css";
export default function NavLink({ content }) {
    return (
        <a className={classes.link}>{content}</a>
    )
}
