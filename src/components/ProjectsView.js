import styles from "./ProjectsView.module.css";

export function ProjectsView(props) {
    return (
        <div id="work" className={styles.ProjectsView}>
            <div className={styles.container}>{props.children}</div>
        </div>
    );
}
