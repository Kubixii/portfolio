import React from 'react'
import arrow from './assets/arrow.png'
import bemCssModules from 'bem-css-modules'
import { default as scrolldownStyles } from './ScrollDown.module.scss'

const style = bemCssModules(scrolldownStyles)


const ScrollDown = () => {
    return (
        <div className={style()}>
            <div className={style('arrowsWrapper')}>
                <div className={style('arrow')}>
                    <img src={arrow} alt="\/" />
                </div>
                <div className={style('arrow')}>
                    <img src={arrow} alt="\/" />
                </div>
                <div className={style('arrow')}>
                    <img src={arrow} alt="\/" />
                </div>
            </div>
        </div>
    );
}

export default ScrollDown;