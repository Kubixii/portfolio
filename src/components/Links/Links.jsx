import Intersecting from '../helpers/Intersecting/Intersecting';
import LinkCard from './LinkCard/LinkCard';
import React from 'react';
import bemCssModules from 'bem-css-modules'
import github from './assets/GitHub.png'
import linkedin from './assets/linkedin.png'
import { default as linksAnimations } from './Links.animations.module.scss'
import { default as linksStyles } from './Links.module.scss'

const style = bemCssModules(linksStyles)
const animation = bemCssModules(linksAnimations)
const Links = () => {

    return (
        <div className={style()}>
            <Intersecting
                initialStateClassName={animation('initialLink')}
                animationClassName={animation('animationLink')}
                wrapAroundContainer
            >
                <LinkCard
                    image={github}
                    title='GitHub'
                    link='https://github.com/Kubixii'
                />
            </Intersecting>
            <Intersecting
                initialStateClassName={animation('initialLink')}
                animationClassName={animation('animationLink')}
                delay={0.1}
                wrapAroundContainer
            >
                <LinkCard
                    image={linkedin}
                    title='LinkedIn'
                    link='https://www.linkedin.com/in/jakub-filipek-4286a01b2/'
                />
            </Intersecting>
        </div>
    );
}

export default Links;