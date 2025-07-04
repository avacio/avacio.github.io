import styles from "./ProjectsView.module.css";

export function ProjectsView(props) {
    return (
        <div id="work" className={styles.ProjectsView}>
            <h1>Personal and School Projects</h1>
            <div className={styles.container}>{props.children}</div>
        </div>
    );
}
