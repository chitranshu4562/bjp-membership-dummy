import classes from "./Card.module.css";

export default function Card({content, classNames}) {
    return (
        <a className={`${classNames} ${classes.card}`}>{content}</a>
    )
}
