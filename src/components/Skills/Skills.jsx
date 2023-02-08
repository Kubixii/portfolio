import React, { useContext, useEffect, useState } from 'react';

import Intersecting from '../helpers/Intersecting/Intersecting';
import SkillCard from './SkillCard/SkillCard';
import { StoreContext } from '../../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import { cloneElement } from 'react';
import comunication from './assets/comunication.png'
import css from './assets/css.png'
import data from './skills.json'
import gimp from './assets/gimp.png'
import html from './assets/html.png'
import js from './assets/js.png'
import office from './assets/office.png'
import php from './assets/php.png'
import phpmyadmin from './assets/phpmyadmin.png'
import react from './assets/react.png'
import sass from './assets/sass.png'
import { default as skillsAnimations } from './Skills.animations.module.scss'
import { default as skillsStyles } from './Skills.module.scss'
import sql from './assets/sql.png'
import troubleshooting from './assets/troubleshooting.png'
import uk_flag from './assets/uk_flag.png'
import windows from './assets/windows.png'

const style = bemCssModules(skillsStyles)
const animation = bemCssModules(skillsAnimations)

const Skills = () => {

    const { currentLanguage, currentTexts: { skillset } } = useContext(StoreContext)

    const images = [comunication, css, gimp, html, js, office, php, phpmyadmin, react, sass, sql, troubleshooting, uk_flag, windows]
    const { skills } = data;
    const [skillsArray, setSkillsArray] = useState([])

    useEffect(() => {
        setSkillsArray(skills.sort(() => Math.random() - 0.5))
    }, [])

    const skillsElements = skillsArray.map(skill => {
        return (
            <SkillCard
                image={images[skill.id]}
                name={skill.name}
            />
        )
    }).map((skill, index) => {

        return (
            <Intersecting
                initialStateClassName={animation('initialSkill')}
                animationClassName={animation('animationSkill')}
                threshold='0'
                rootMargin='0%'
                key={index}
                delay={4}
                wrapAroundContainer
            >
                {skill}
            </Intersecting>
        )
    })

    return (
        <div className={style()}>
            <Intersecting
                initialStateClassName={animation('initialTitle')}
                animationClassName={animation('animationTitle')}
            >
                <div className={style('title')}>
                    <h1>{skillset.title}</h1>
                </div>
            </Intersecting>
            <div className={style('skillsWrapper')}>
                {skillsElements}
            </div>
        </div>
    );
}

export default Skills;