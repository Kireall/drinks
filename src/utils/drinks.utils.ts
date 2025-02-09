import { Drink } from '../interfaces/drinks.interfaces.ts';

type OutputObject = {
    key: number;
    measure?: string;
    ingredient: string;
};

/**
 * Создаем объект для таблицы ингредиентов напитка
 */
export const transformObject = (input: Drink): OutputObject[] => {
    const result: OutputObject[] = [];
    const measureRegex = /^strMeasure(\d+)$/;
    const ingredientRegex = /^strIngredient(\d+)$/;

    const temp: { [key: number]: Partial<OutputObject> } = {};
    const inputObject = input as unknown as Record<string, string | null>;

    for (const key in inputObject) {
        if (Object.hasOwn(inputObject, key)) {
            const value = inputObject[key];

            const measureMatch = key.match(measureRegex);
            if (measureMatch) {
                const n = parseInt(measureMatch[1], 10);
                if (!temp[n]) temp[n] = { key: n };
                temp[n].measure = value!;
            }

            const ingredientMatch = key.match(ingredientRegex);
            if (ingredientMatch) {
                const n = parseInt(ingredientMatch[1], 10);
                if (!temp[n]) temp[n] = { key: n };
                temp[n].ingredient = value!;
            }
        }
    }

    for (const n in temp) {
        if (Object.hasOwn(temp, n)) {
            const item = temp[n];
            if (item.ingredient) {
                result.push({
                    key: item.key!,
                    measure: item.measure,
                    ingredient: item.ingredient,
                });
            }
        }
    }

    return result;
};
