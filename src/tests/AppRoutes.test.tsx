import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { AppRoutes } from '../AppRoutes';
import { COCKTAIL_CODES } from '../constants/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

describe('AppRoutes', () => {
    let queryClient: QueryClient;

    beforeEach(() => {
        queryClient = new QueryClient();
    });

    const renderWithProviders = (initialEntries: string[]) =>
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={initialEntries}>
                    <AppRoutes />
                </MemoryRouter>
            </QueryClientProvider>
        );

    it(`Рендерит главную страницу с первым напитком из списка (${COCKTAIL_CODES[0]}) при переходе на "/"`, async () => {
        renderWithProviders(['/']);
        const element = await screen.findByTestId(`homepage-${COCKTAIL_CODES[0]}`);
        expect(element).toBeInTheDocument();
    });

    it('Рендерит главную страницу с напитком при переходе на корректную ссылку', async () => {
        const testCocktail = COCKTAIL_CODES[1];
        renderWithProviders([`/${testCocktail}`]);
        const element = await screen.findByTestId(`homepage-${COCKTAIL_CODES[1]}`);
        expect(element).toBeInTheDocument();
    });

    it('Рендерит 404 ошибку при переходе на некорректную ссылку', () => {
        renderWithProviders(['/nonexistent-page']);
        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('Page not found.')).toBeInTheDocument();
    });
});
