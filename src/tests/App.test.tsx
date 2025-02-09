import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from '../App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

vi.mock('../AppRoutes', () => ({
    AppRoutes: () => <div data-testid='app-routes'>App Routes Component</div>,
}));

describe('App component', () => {
    let queryClient: QueryClient;

    beforeEach(() => {
        queryClient = new QueryClient();
    });

    const renderWithProviders = () =>
        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );

    it('рендерит AppRoutes и PageLayout внутри Router', async () => {
        renderWithProviders();

        const layout = await screen.findByTestId('app-routes');
        expect(layout).toBeInTheDocument();
    });

    it('оборачивает компоненты в BrowserRouter', async () => {
        renderWithProviders();

        const links = await screen.findAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });
});
