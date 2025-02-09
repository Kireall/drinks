import { Layout } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';

import { MainNavigation } from '../components/MainNavigation';

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
    minHeight: '100%',
};

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
    maxWidth: 1024,
    width: '100%',
    minWidth: 360,
    margin: 'auto',
    flexGrow: 1,
};

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setCollapsed(true);
        }
        const resizeObserver = () => {
            if (window.innerWidth < 768) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        };

        window.addEventListener('resize', resizeObserver);

        return () => {
            window.removeEventListener('resize', resizeObserver);
        };
    }, []);

    return (
        <Layout style={{ background: '#333' }} data-testid='page-layout'>
            <Layout style={layoutStyle} hasSider>
                <Sider
                    style={siderStyle}
                    collapsible
                    collapsed={collapsed}
                    collapsedWidth={50}
                    width={150}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <MainNavigation collapsed={collapsed} />
                </Sider>
                <Content style={{ padding: '24px 48px', flexGrow: 1 }}>{children}</Content>
            </Layout>
        </Layout>
    );
};
