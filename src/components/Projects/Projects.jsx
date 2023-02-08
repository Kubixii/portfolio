import React, { useEffect, useState } from 'react'

import ProjectCard from './ProjectCard/ProjectCard'
import bemCssModules from 'bem-css-modules'
import projects from './projects.json'
import { default as projectsStyles } from './Projects.module.scss'

const style = bemCssModules(projectsStyles)

const Projects = () => {
    const [projectsList, setProjectsList] = useState([])
    useEffect(() => {
        setProjectsList(projects)
    }, [])

    const elements = projectsList
        .map(project => (
            <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
                id={project.id}
                delay={0.2}
            />
        ))

    return (
        <div className={style()}>
            <div className={style('cardsWrapper')}>
                {elements}
            </div>
        </div>
    );
}

export default Projects;