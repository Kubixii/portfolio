import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as linkcardStyles } from './LinkCard.module.scss'

const style = bemCssModules(linkcardStyles)

const LinkCard = ({
    image,
    title,
    link
}) => (
    <div className={style()} onClick={() => window.location.href = link}>
        <div className={style('linkImage')}>
            <img src={image} alt="Github" />
        </div>
        <div className={style('linkTitle')}>
            <p>{title}</p>
        </div>
    </div>
);

export default LinkCard;