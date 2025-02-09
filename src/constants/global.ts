export const COCKTAIL_CODES = ['margarita', 'mojito', 'a1', 'kir'] as const;
export type PageType = (typeof COCKTAIL_CODES)[number];
