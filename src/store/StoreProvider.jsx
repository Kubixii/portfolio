import React, { useEffect, useState } from 'react';

import Text from '../helpers/Text.json'
import { createContext } from 'react'
import { useParams } from 'react-router';

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('pl')
    const [currentTexts, setCurrentTexts] = useState(Text.init)

    const { lang } = useParams()

    const handleLanguageChange = () => {
        window.history.replaceState("", "", currentLanguage === 'pl' ? 'pl' : 'en');
        setCurrentTexts(Text[currentLanguage]);
    }

    useEffect(() => {
        setCurrentLanguage(lang)
        handleLanguageChange()
    }, [])
    useEffect(() => {
        handleLanguageChange();
    }, [currentLanguage, lang])

    const switchLanguage = () => setCurrentLanguage(currentLanguage === 'pl' ? 'en' : 'pl')

    return (
        <StoreContext.Provider value={{
            currentLanguage,
            currentTexts,
            switchLanguage
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;