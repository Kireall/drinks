import { API_URL } from '../constants/api.ts';
import { COCKTAIL_CODES } from '../constants/global.ts';

class DrinksApi {
    async fetchDrinksData(drinkCode: string = COCKTAIL_CODES[0]) {
        const url = new URL(`${API_URL}/1/search.php`);
        url.searchParams.set('s', `${drinkCode}`);

        const res: Response = await fetch(url);
        return await res.json();
    }
}

export const drinksApi = new DrinksApi();
