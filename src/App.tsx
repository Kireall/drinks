import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { PageLayout } from './layouts';

export const App: React.FC = () => (
    <Router>
        <PageLayout>
            <AppRoutes />
        </PageLayout>
    </Router>
);
