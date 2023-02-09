import React, { useEffect, useState } from 'react'

import ProjectCard from './ProjectCard/ProjectCard'
import bemCssModules from 'bem-css-modules'
import { default as projectsStyles } from './Projects.module.scss'

const style = bemCssModules(projectsStyles)

const Projects = () => {

    const [projectsList, setProjectsList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        console.log("EE")
        //TODO fix json fetchin in build
        fetch('./projects.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res)
            return res.json();
        }).then((json) => {
            setProjectsList(json)
        })
    }

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