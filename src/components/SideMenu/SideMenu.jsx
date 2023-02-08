import React, { useContext } from 'react';

import SideMenuItem from '../SideMenuItem/SideMenuItem';
import { StoreContext } from '../../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import englishFlag from './assets/uk_flag.png'
import home from './assets/home.png'
import { default as introductionStyles } from '../Introduction/Introduction.module.scss'
import link from './assets/link.png'
import { default as linkStyles } from '../Links/Links.module.scss'
import menuClosed from './assets/menu_closed.png'
import menuOpened from './assets/menu_opened.png'
import polishFlag from './assets/polish_flag.png'
import projects from './assets/projects.png'
import { default as projectsStyles } from '../Projects/Projects.module.scss'
import { default as sidemenuStyles } from './SideMenu.module.scss'
import skills from './assets/skills.png'
import { default as skillsStyles } from '../Skills/Skills.module.scss'
import { useState } from 'react';

const style = bemCssModules(sidemenuStyles)
const linksStyle = bemCssModules(linkStyles)
const introductionStyle = bemCssModules(introductionStyles)
const projectsStyle = bemCssModules(projectsStyles)
const skillsStyle = bemCssModules(skillsStyles)

const SideMenu = () => {

    const [isOpened, setIsOpened] = useState(false)
    const handleMenu = () => setIsOpened(!isOpened)
    const { currentLanguage, currentTexts: { sidemenu }, switchLanguage } = useContext(StoreContext)

    return (
        <div className={style('')}>
            <div
                className={style('mobileMenu')}
                onClick={handleMenu}
                aria-label={isOpened ? "opened" : "closed"}
            ></div>
            <div className={style('sideMenuItemsWrapper')}>
                <div className={style('menuItemsWrapper')}>
                    <SideMenuItem
                        src={home}
                        alt='home'
                        text={sidemenu.aboutMe}
                        id={introductionStyle()}
                    />
                    <SideMenuItem
                        src={skills}
                        alt='skills'
                        text={sidemenu.skills}
                        id={skillsStyle()}
                    />
                    <SideMenuItem
                        src={projects}
                        alt='projects'
                        text={sidemenu.projects}
                        id={projectsStyle()}
                    />
                    <SideMenuItem
                        src={link}
                        alt='reference'
                        text={sidemenu.links}
                        id={linksStyle()}
                    />
                </div>
                <div className={style('languageChooser')} onClick={switchLanguage}>
                    <img src={currentLanguage === 'pl' ? polishFlag : englishFlag} alt="Język" />
                </div>
            </div>
        </div>
    );
}

export default SideMenu;