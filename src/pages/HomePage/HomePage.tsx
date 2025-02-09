import { Empty, Spin, Typography } from 'antd';
import React from 'react';

import { drinksApi } from '../../api/drinks.ts';
import { DrinksList } from '../../components/DrinksList';
import { useQuery } from '@tanstack/react-query';

export const HomePage: React.FC<{ drink?: string }> = ({ drink }) => {
    const { isLoading, data, error } = useQuery({
        queryKey: ['drinksData', drink],
        queryFn: () => {
            return drinksApi.fetchDrinksData(drink);
        },
    });

    if (error) {
        return <Empty description={<Typography.Text>Error</Typography.Text>} />;
    }

    return (
        <div data-testid={`homepage-${drink}`}>
            {isLoading && <Spin fullscreen={true} spinning={isLoading} />}
            {data && <DrinksList drinks={data.drinks} />}
        </div>
    );
};
