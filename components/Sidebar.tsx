'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    FileTextOutlined,
    SettingOutlined,
    CreditCardOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (val: boolean) => void }) => {
    const pathname = usePathname();

    const items = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link href="/dashboard">Dashboard</Link>,
        },
        {
            key: '/billed-views',
            icon: <FileTextOutlined />,
            label: <Link href="/billed-views">Billed Views</Link>,
        },
        {
            key: '/payments',
            icon: <CreditCardOutlined />,
            label: <Link href="/payments">Payments</Link>,
        },
        {
            key: '/profile',
            icon: <UserOutlined />,
            label: <Link href="/profile">Profile</Link>,
        },
        {
            key: '/settings',
            icon: <SettingOutlined />,
            label: <Link href="/settings">Settings</Link>,
        },
    ];

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={260}
            className="h-screen overflow-auto fixed left-0 top-0 bottom-0 z-50 border-r border-gray-800"
            style={{
                background: '#111827', // Matching theme token
            }}
        >
            <div className="flex items-center justify-center h-16 border-b border-gray-800">
                {!collapsed ? (
                    <h1 className="text-xl font-bold text-white tracking-wider">
                        BRAND<span className="text-indigo-500">FLUENCE</span>
                    </h1>
                ) : (
                    <h1 className="text-xl font-bold text-indigo-500">BF</h1>
                )}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname]}
                items={items}
                className="mt-4 border-none bg-transparent"
                style={{ fontSize: '15px' }}
            />
            <div className="absolute bottom-4 w-full px-2">
                <Menu
                    theme="dark"
                    mode="inline"
                    selectable={false}
                    items={[
                        {
                            key: 'logout',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            className: 'text-red-400 hover:text-red-300'
                        }
                    ]}
                    className="bg-transparent"
                />
            </div>
        </Sider>
    );
};

export default Sidebar;
