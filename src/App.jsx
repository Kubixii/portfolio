import './App.css'

import React, { useEffect } from 'react'

import AboutMe from './components/Introduction/Introduction';
import Links from './components/Links/Links';
import NicTakiego from './components/NicTakiego/NicTakiego'
import Projects from './components/Projects/Projects';
import SideMenu from './components/SideMenu/SideMenu';
import Skills from './components/Skills/Skills';
import StoreProvider from './store/StoreProvider';

const App = () => {

  const animation = () => {
    const root = document.querySelector('#root')
    root.style.setProperty("--scroll", window.pageYOffset / (root.offsetHeight - window.innerHeight));
  }

  useEffect(() => {
    animation()
    window.addEventListener("scroll", animation, false);
    return () => window.removeEventListener("scroll", animation)
  })
  return (
    <StoreProvider>
      <SideMenu />
      <AboutMe />
      <Skills />
      <Projects />
      <Links />
      {/* <NicTakiego /> */}
    </StoreProvider>
  );
}

export default App;