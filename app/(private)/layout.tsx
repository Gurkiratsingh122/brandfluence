'use client';

import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

const { Content } = Layout;

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="min-h-screen">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout
                className="transition-all duration-200 ease-in-out"
                style={{ marginLeft: collapsed ? 80 : 260 }}
            >
                <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    className="p-6 overflow-initial"
                    style={{
                        minHeight: 280,
                        background: '#f3f4f6', // Matching theme background
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
