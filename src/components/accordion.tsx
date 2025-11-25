import { useState, useRef } from "react"
import styles from "@/styles/accordion.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"

type Props = {
    heading: string,
    children: React.ReactNode,
}

export default function Accordion({ heading, children} :Props) {
    const refText = useRef<HTMLDivElement | null>(null);

    const [textIsOpen, setTextIsOpen] = useState(false)

    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }

    return (
        <div className={textIsOpen ? styles.open : styles.close} id="frame">
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
                </button>
            </h3>
            <div
                className={styles.text}
                ref={refText}
                style={{
                    '--text-height': refText.current
                    ? `${refText.current.scrollHeight}px`
                    : '0px',
                } as React.CSSProperties}
            >
            <div className={styles.textInner}>{children}</div>
        </div>
    </div>
    )
}