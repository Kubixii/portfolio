import React, { useContext } from 'react'

import Intersecting from '../helpers/Intersecting/Intersecting'
import ScrollDown from '../helpers/ScrollDown/ScrollDown'
import { StoreContext } from '../../store/StoreProvider'
import { default as aboutMeAnimations } from './Introduction.animations.module.scss'
import { default as aboutMeStyles } from './Introduction.module.scss'
import bemCssModules from 'bem-css-modules'

const style = bemCssModules(aboutMeStyles)
const animation = bemCssModules(aboutMeAnimations)

const AboutMe = () => {
    const { currentTexts: { introduction } } = useContext(StoreContext)
    return (
        <div className={style()}>
            <div className={style('introductionWrapper')}>

                <div className={`${style('introduction')} ${style('box')}`}>
                    <Intersecting
                        initialStateClassName={animation('initialSmallText')}
                        animationClassName={animation('animationSmallText')}
                    >
                        <p className={style('smallText')}>{introduction.welcome}</p>
                    </Intersecting>
                    <Intersecting
                        initialStateClassName={animation('initialName')}
                        animationClassName={animation('animationName')}
                        delay='0.5'
                    >
                        <h1>{introduction.name}</h1>
                    </Intersecting>
                    <Intersecting
                        initialStateClassName={animation('initialSmallText')}
                        animationClassName={animation('animationSmallText')}
                        delay='0.3'
                    >
                        <p className={style('smallText')}>{introduction.role}</p>
                    </Intersecting>
                </div>
                <div className={`${style('description')} ${style('box')}`}>
                    <Intersecting
                        initialStateClassName={animation('initialDescription')}
                        animationClassName={animation('animationDescription')}
                        delay='0.2'
                    >
                        <div className={style('descriptionText')}>
                            <p>{introduction.description}</p>
                        </div>
                    </Intersecting>
                </div>
            </div>
            <ScrollDown />
        </div>
    );
}

export default AboutMe;