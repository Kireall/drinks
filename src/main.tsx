import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                components: {
                    List: {
                        itemPaddingLG: '16px 0',
                        metaMarginBottom: 0,
                        fontSizeLG: 36,
                    },
                    Table: {
                        headerBorderRadius: 0,
                    },
                },
            }}
        >
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ConfigProvider>
    </StrictMode>
);
