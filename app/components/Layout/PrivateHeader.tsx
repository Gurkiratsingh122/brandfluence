'use client';

import { Layout, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';

const { Header } = Layout;

interface PrivateHeaderProps {
    brandName?: string;
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
}

export function PrivateHeader({ brandName = 'BrandName', collapsed = false, onCollapse }: PrivateHeaderProps) {
    const router = useRouter();

    const menuItems: MenuProps['items'] = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Profile',
            onClick: () => router.push('/account/profile'),
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
            onClick: () => router.push('/account/settings'),
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Logout',
            onClick: () => {
                // Handle logout
                router.push('/');
            },
        },
    ];

    return (
        <Header
            style={{
                background: '#fff',
                padding: '0 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 10,
            }}
        >
            {/* Left - Toggle & Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => onCollapse?.(!collapsed)}
                    style={{ color: '#666', fontSize: '16px' }}
                />
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#111' }}>
                    BrandFluence
                </div>
            </div>

            {/* Right - User Info */}
            <div className="flex items-center justify-center gap-3">
                <Dropdown
                    prefixCls="custom-dropdown-header"
                    menu={{ items: menuItems }}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <button className="flex gap-2.5 h-10.5 px-2 border border-[#C8C8C8] items-center p-px justify-center rounded-full bg-white cursor-pointer">
                        <Avatar alt="profile" icon={<User />} />

                        <div className="text-[16px] font-medium capitalize">BrandFluence</div>
                        <span ><DownOutlined /></span>

                    </button>
                </Dropdown>
            </div>
        </Header>
    );
}
