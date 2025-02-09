import { List, Table, Typography } from 'antd';
import React, { ReactNode } from 'react';

import { Drink } from '../../../../interfaces/drinks.interfaces.ts';
import { transformObject } from '../../../../utils/drinks.utils.ts';

const { Title } = Typography;
const columns = [
    {
        title: 'Measure',
        dataIndex: 'measure',
        key: 'measure',
    },
    {
        title: 'Ingredient',
        dataIndex: 'ingredient',
        key: 'ingredient',
    },
];

export const Description: React.FC<{ item: Drink }> = ({ item }) => {
    const { strCategory, strAlcoholic, strGlass, strInstructions } = item;

    const ingredients = transformObject(item);

    const data: { title?: string; value: string | ReactNode }[] = [
        {
            value: strCategory,
        },
        {
            value: strAlcoholic,
        },
        {
            value: strGlass,
        },
        {
            title: 'Instructions',
            value: strInstructions,
        },
        {
            title: 'List of ingredients',
            value: <Table dataSource={ingredients} columns={columns} pagination={false} />,
        },
    ];

    return (
        <>
            <List
                itemLayout='vertical'
                dataSource={data}
                renderItem={({ title, value }) => (
                    <List.Item>
                        {title && <Title level={4}>{title}</Title>}
                        {value}
                    </List.Item>
                )}
            />
        </>
    );
};
