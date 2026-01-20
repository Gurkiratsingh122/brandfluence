'use client';

import React from 'react';
import { Layout, Avatar, Badge, Dropdown, Button, Input } from 'antd';
import {
    BellOutlined,
    SearchOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const Topbar = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (val: boolean) => void }) => {
    const items = [
        {
            key: '1',
            label: 'My Profile',
            icon: <UserOutlined />,
        },
        {
            key: '2',
            label: 'Logout',
            danger: true,
        },
    ];

    return (
        <Header
            className="flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100"
            style={{
                height: 64,
                padding: '0 24px',
                background: 'rgba(255, 255, 255, 0.9)', // Glassmorphism intent
            }}
        >
            <div className="flex items-center gap-4">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 48,
                        height: 48,
                    }}
                />
                <div className="hidden md:block">
                    <Input
                        prefix={<SearchOutlined className="text-gray-400" />}
                        placeholder="Search..."
                        className="w-64 rounded-full border-gray-200 bg-gray-50 hover:bg-white focus:bg-white transition-all"
                        bordered={false}
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <Badge count={5} dot offset={[-2, 2]} color="#6366f1">
                    <Button type="text" shape="circle" icon={<BellOutlined style={{ fontSize: 20 }} />} />
                </Badge>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <Avatar size="large" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" icon={<UserOutlined />} className="border-2 border-indigo-100" />
                        <div className="hidden md:block leading-tight">
                            <div className="font-semibold text-gray-800">John Doe</div>
                            <div className="text-xs text-gray-500">Admin</div>
                        </div>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default Topbar;
