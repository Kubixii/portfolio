import React, { useContext } from 'react'

import Intersecting from '../../helpers/Intersecting/Intersecting'
import { StoreContext } from '../../../store/StoreProvider'
import bemCssModules from 'bem-css-modules'
import { default as projectcardAnimations } from './ProjectCard.animations.module.scss'
import { default as projectcardStyles } from './ProjectCard.module.scss'

const style = bemCssModules(projectcardStyles)
const animation = bemCssModules(projectcardAnimations)

const ProjectCard = ({
    title = "",
    image = "",
    description = "",
    link = "",
    delay = 0,
    id = 0
}) => {

    const { currentLanguage } = useContext(StoreContext)



    return (
        <Intersecting
            initialStateClassName={animation('initialCard')}
            animationClassName={animation('animationCard')}
            delay={delay * id}
        >
            <div className={style()} onClick={() => document.location.href = link}>
                <div
                    className={style('image')}
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
                <div className={style('title')}>
                    {currentLanguage === 'pl' ? title.pl : title.en}
                </div>
                <div className={style('desc')}>
                    <p>
                        {currentLanguage === 'pl' ? description.pl : description.en}
                    </p>
                </div>
            </div>
        </Intersecting>
    );
}

export default ProjectCard;