import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Text from '../helpers/Text.json'
import { createContext } from 'react'

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('pl')
    const [currentTexts, setCurrentTexts] = useState(Text.init)
    const navigate = useNavigate()
    const { lang } = useParams()

    const handleLanguageChange = () => {
        setCurrentTexts(Text[currentLanguage]);
    }

    useEffect(() => {
        setCurrentLanguage(lang)
        handleLanguageChange()
    }, [])
    useEffect(() => {
        handleLanguageChange();
    }, [currentLanguage, lang])

    const switchLanguage = () => {
        navigate(currentLanguage === 'pl' ? '/en' : '/pl')
        setCurrentLanguage(currentLanguage === 'pl' ? 'en' : 'pl')
    }

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