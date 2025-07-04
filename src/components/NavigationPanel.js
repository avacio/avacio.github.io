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
                {/* <li><a className="scroll" onClick={document.getElementById("myid").scrollIntoView({ behavior: "smooth" });} href="#work">Portfolio</a></li> */}
                <li><div className="scroll" onClick={scrollToWork}>Portfolio</div></li>
                <li><a href="https://avacio.github.io/about">About Me</a></li>
                <li><a href="alexis_gervacio_resume.pdf">Résumé</a></li>
                <li><div className="scroll" onClick={scrollToContact}>Contact</div></li>
            </ul>
        </div>
    );
}
