import React, { useContext, useEffect, useState } from "react";

import { StoreContext } from "../../../store/StoreProvider";
import bemCssModules from 'bem-css-modules'
import { default as skillsStyles } from '../Skills.module.scss'

const style = bemCssModules(skillsStyles)

const SkillCard = ({
    image,
    name
}) => {
    const [position, setPosition] = useState({ marginTop: 0, marginLeft: 0 })

    useEffect(() => {
        const marginTop = `${Math.floor(Math.random() * 5)}vh`
        const marginLeft = `${Math.floor(Math.random() * 20)}vw`
        setPosition({ marginTop, marginLeft })
    }, [])

    const { currentLanguage } = useContext(StoreContext)
    const nameLang = currentLanguage === 'pl' ? name[0] : name[1];
    return (

        <div className={style('skill')}
            style={position}
        >
            <div className={style('skillImage')}>
                <img src={image} alt={nameLang} />
            </div>
            <p className={style('skillName')}>{nameLang}</p>
        </div>
    );
}

export default SkillCard;