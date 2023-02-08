import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as sidemenuitemStyles } from './SideMenuItem.module.scss'

const style = bemCssModules(sidemenuitemStyles)

const SideMenuItem = ({
    src = '',
    alt = '',
    text = '',
    id = ''
}) => {

    const scroll = () => {
        const element = document.querySelector(`.${id}`)
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={style()} onClick={scroll}>
            <img
                className={style('itemImage')}
                src={src}
                alt={alt}
            />
            <p className={style('itemText')}>{text}</p>
        </div>
    );
}

export default SideMenuItem;