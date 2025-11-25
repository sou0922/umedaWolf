import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/nav.module.css"

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav =() => {
        setNavIsOpen(false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 767px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }
                    }
                `}</style>
            )}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeNav}>Home</Link>
                </li>
                <li>
                    <Link href="/level1" onClick={closeNav}>Level1</Link>
                </li>
                <li>
                    <Link href="/level2" onClick={closeNav}>Level2</Link>
                </li>
                <li>
                    <Link href="/level3" onClick={closeNav}>Level3</Link>
                </li>
                <li>
                    <Link href="/level4" onClick={closeNav}>Level4</Link>
                </li>
                <li>
                    <Link href="/extra" onClick={closeNav}>Extra</Link>
                </li>
            </ul>
        </nav>
    )
}