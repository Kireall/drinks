import { vi } from 'vitest';

import '@testing-library/jest-dom';

/**
 * Мокаем отсутствующие методы
 */
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    enumerable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

/**
 * IntersectionObserver
 */
class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

/**
 * getComputedStyle
 */
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

// Или минимальная реализация:
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: () => '',
        display: 'block',
        appearance: ['-webkit-appearance'],
    }),
});
