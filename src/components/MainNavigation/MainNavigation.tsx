import { Menu, MenuProps } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { COCKTAIL_CODES } from '../../constants/global.ts';
import { capitalize } from '../../utils/string.utils.ts';
import { getDrinkIconByCode } from '../Icons/utils/icons.utils.tsx';

const menuStyle: React.CSSProperties = {
    position: 'sticky',
    top: '0',
    left: '0',
};

export const MainNavigation: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const location = useLocation();
    const menuItems: MenuProps['items'] = COCKTAIL_CODES.map((code) => ({
        key: code,
        label: <Link to={`/${code}`}>{capitalize(code)}</Link>,
        icon: getDrinkIconByCode(code),
    }));

    return (
        <Menu
            theme='dark'
            mode='inline'
            selectedKeys={[location.pathname.replace('/', '') || COCKTAIL_CODES[0]]}
            items={menuItems}
            inlineCollapsed={collapsed}
            style={menuStyle}
        />
    );
};
