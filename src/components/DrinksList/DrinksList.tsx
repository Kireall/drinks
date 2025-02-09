import { Empty, List } from 'antd';
import React from 'react';

import { Drink } from '../../interfaces/drinks.interfaces.ts';
import { LazyImage } from '../LazyImage';
import { Description } from './components/Description';

export const DrinksList: React.FC<{ drinks: Drink[] }> = ({ drinks }) => {
    if (!drinks) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

    return (
        <List
            itemLayout='vertical'
            size='large'
            dataSource={drinks}
            renderItem={(item) => (
                <List.Item
                    key={item.idDrink}
                    extra={<LazyImage alt={item.strDrink} width={200} height={200} src={item.strDrinkThumb} />}
                >
                    <List.Item.Meta title={item.strDrink} description={<Description item={item} />} />
                </List.Item>
            )}
        />
    );
};
