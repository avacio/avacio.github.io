import styles from "./ProjectView.module.css";

export function ProjectView({
    projectData
}) {
    return (

        <div className="teaser_item wow fadeInUp ProjectCell">
            <a href={projectData.link} className="fadeOutLink">
                <div className="text">
                <p>{projectData.name}</p>
                </div>
                <img className="hover" src={projectData.imageSrc} alt=""/>
            </a>
        </div>
    );
}

