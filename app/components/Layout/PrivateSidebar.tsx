'use client';

import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    FileTextOutlined,
    DollarOutlined,
    BarChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

const { Sider } = Layout;

interface PrivateSidebarProps {
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
}

export function PrivateSidebar({ collapsed = false, onCollapse }: PrivateSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const menuItems: MenuProps['items'] = [
        {
            key: '/brands/dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
            onClick: () => router.push('/brands/dashboard'),
        },
        {
            key: '/brands/my-campaigns',
            icon: <FileTextOutlined />,
            label: 'My Campaigns',
            onClick: () => router.push('/brands/my-campaigns'),
        },
        {
            key: '/brands/credits',
            icon: <DollarOutlined />,
            label: 'Spend & Credits',
            onClick: () => router.push('/brands/credits'),
        },
        {
            key: '/brands/analytics',
            icon: <BarChartOutlined />,
            label: 'Analytics',
            onClick: () => router.push('/brands/analytics'),
        },
        {
            key: '/brands/settings',
            icon: <SettingOutlined />,
            label: 'Settings',
            onClick: () => router.push('/brands/settings'),
        },
    ];

    // Determine active key based on pathname
    const getActiveKey = () => {
        if (pathname.includes('dashboard')) return '/brands/dashboard';
        if (pathname.includes('campaigns')) return '/brands/my-campaigns';
        if (pathname.includes('credits')) return '/brands/credits';
        if (pathname.includes('analytics')) return '/brands/analytics';
        if (pathname.includes('settings')) return '/brands/settings';
        return '';
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            width={240}
            style={{
                background: '#fff',
                borderRight: '1px solid #e8eaff',
            }}
            trigger={null}
        >
            {/* Logo Section */}
            <div
                style={{
                    padding: '20px 16px',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#111',
                    textAlign: collapsed ? 'center' : 'left',
                    borderBottom: '1px solid #e8eaff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {collapsed ? 'BV' : 'BrandFluence'}
            </div>

            {/* Menu */}
            <Menu
                mode="inline"
                selectedKeys={[getActiveKey()]}
                items={menuItems}
                style={{
                    border: 'none',
                    background: 'transparent',
                }}
            />
        </Sider>
    );
}
