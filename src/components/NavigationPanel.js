import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from "./NavigationPanel.module.css";

export function NavigationPanel(props) {
    function scrollTo(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const scrollToWork = () => scrollTo('work');
    const scrollToContact = () => scrollTo('contact');

    return (
        <div className={styles.navigation}>
            <ul>
                <li><div className="scroll" onClick={scrollToWork}>Portfolio</div></li>
                {/* <li><a href="https://avacio.github.io/about">About Me</a></li> */}
                <li><Link to="/about">About Me</Link></li>
                <li><a href="alexis_gervacio_resume.pdf">Résumé</a></li>
                <li><div className="scroll" onClick={scrollToContact}>Contact</div></li>
            </ul>
        </div>
    );
}
