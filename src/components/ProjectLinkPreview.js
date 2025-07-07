import Microlink from '@microlink/react';
import styles from "./ProjectLinkPreview.module.css";
import DOMPurify from 'dompurify'

export function ProjectLinkPreview({
    projectData
}) {
    return (

        // <div className="teaser_item wow fadeInUp ProjectCell">
        <div className={styles.ProjectLinkPreview}>
            <p className={styles.Title}>{projectData.name}</p>
            <p className={styles.Description} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(projectData.description) }} />
            <Microlink url={projectData.link} />
        </div>
    );
}

