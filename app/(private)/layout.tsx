'use client';

import React, { useState } from 'react';
import { Layout } from 'antd';
import { PrivateHeader } from '@/app/components/Layout/PrivateHeader';
import { PrivateSidebar } from '@/app/components/Layout/PrivateSidebar';
import { Footer } from '@/app/components/Layout/Footer';

const { Content } = Layout;

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Private Header */}
            <PrivateHeader brandName="BrandName" collapsed={collapsed} onCollapse={setCollapsed} />

            {/* Main Layout with Sidebar */}
            <Layout style={{ flex: 1, color: '#111' }}>
                {/* Sidebar */}
                <PrivateSidebar collapsed={collapsed} onCollapse={setCollapsed} />

                {/* Main Content */}
                <Layout>
                    {/* Page Content */}
                    <Content style={{ padding: '24px', background: '#f8f9ff' }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>

            {/* Footer */}
            <Footer />
        </Layout>
    );
};

export default PrivateLayout;
