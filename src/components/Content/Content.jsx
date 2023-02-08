import { Navigate, Route, Routes } from 'react-router-dom';

import App from '../../App'
import React from 'react'

const Content = () => {
    return (
        <Routes>
            <Route exact path='*' element={<Navigate to='/lang/pl' />} />
            <Route exact path='/lang/:lang' element={<App />} />
            <Route exact path='/lang/:lang' element={<App />} />
        </Routes>
    );
}

export default Content;