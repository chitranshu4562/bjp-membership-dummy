import {useState} from "react";
import classes from "./ExpandableBox.module.css";

export default function ExpandableBox({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={classes.clickableHeader} onClick={handleToggleOpen}>
                <p>{title}</p>
                <p>{isOpen ? '-' : '+'}</p>
            </div>
            {!isOpen && <hr/>}
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </>
    )
}
