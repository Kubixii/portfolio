import { Navigate, Route, Routes } from 'react-router-dom';

import App from '../../App'
import React from 'react'

const Content = () => {
    return (
        <Routes>
            <Route exact path='*' element={<Navigate to='/pl' />} />
            <Route exact path='/:lang' element={<App />} />
        </Routes>
    );
}

export default Content;