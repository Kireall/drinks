import { Result } from 'antd';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { COCKTAIL_CODES } from './constants/global.ts';
import { HomePage } from './pages';

export const AppRoutes: React.FC = () => (
    <Routes>
        <Route path='/' element={<Navigate to={`/${COCKTAIL_CODES[0]}`} replace />} />
        {COCKTAIL_CODES.map((code) => (
            <Route key={code} path={`/${code}`} element={<HomePage drink={code} />} />
        ))}
        <Route path='*' element={<Result status='404' title='404' subTitle='Page not found.' />} />
    </Routes>
);
