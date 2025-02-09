import { COCKTAIL_CODES } from '../../../constants/global.ts';
import { AoneIcon, KirIcon, MargaritaIcon, MojitoIcon } from '../Icons.tsx';

export const getDrinkIconByCode = (code: string) => {
    switch (code) {
        case COCKTAIL_CODES[0]:
            return <MargaritaIcon />;
        case COCKTAIL_CODES[1]:
            return <MojitoIcon />;
        case COCKTAIL_CODES[2]:
            return <AoneIcon />;
        case COCKTAIL_CODES[3]:
            return <KirIcon />;
    }
};
