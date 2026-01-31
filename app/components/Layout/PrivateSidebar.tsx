'use client';

import { Layout, Menu, Switch } from 'antd';
import {
    DashboardOutlined,
    FileTextOutlined,
    DollarOutlined,
    BarChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const { Sider } = Layout;

interface PrivateSidebarProps {
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
}

export function PrivateSidebar({ collapsed = false, onCollapse }: PrivateSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [showInfluencerRoutes, setShowInfluencerRoutes] = useState(false);

    const baseMenuItems: MenuProps['items'] = [
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
            key: '/brands/spend-credits',
            icon: <DollarOutlined />,
            label: 'Spend & Credits',
            onClick: () => router.push('/brands/spend-credits'),
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

    const influencerMenuItems: MenuProps['items'] = [
        {
            key: '/influencers/dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
            onClick: () => router.push('/influencers/dashboard'),
        },
        {
            key: '/influencers/my-campaigns',
            icon: <FileTextOutlined />,
            label: 'My Campaigns',
            onClick: () => router.push('/influencers/my-campaigns'),
        },
        {
            key: '/influencers/available-campaigns',
            icon: <FileTextOutlined />,
            label: 'Available Campaigns',
            onClick: () => router.push('/influencers/available-campaigns'),
        },
        {
            key: '/influencers/earnings',
            icon: <DollarOutlined />,
            label: 'Earnings',
            onClick: () => router.push('/influencers/earnings'),
        },
        {
            key: '/influencers/settings',
            icon: <SettingOutlined />,
            label: 'Settings',
            onClick: () => router.push('/influencers/settings'),
        },
    ];

    const menuItems: MenuProps['items'] = showInfluencerRoutes ? [...baseMenuItems, { key: 'influencers_header', label: 'Influencers', disabled: true }, ...influencerMenuItems] : baseMenuItems;

    // Determine active key based on pathname
    const getActiveKey = () => {
        if (pathname.includes('dashboard')) return '/brands/dashboard';
        if (pathname.includes('campaigns')) return '/brands/my-campaigns';
        if (pathname.includes('credits')) return '/brands/spend-credits';
        if (pathname.includes('analytics')) return '/brands/analytics';
        if (pathname.includes('settings')) return '/brands/settings';
        // influencer routes
        if (pathname.includes('/influencers/dashboard')) return '/influencers/dashboard';
        if (pathname.includes('/influencers/my-campaigns')) return '/influencers/my-campaigns';
        if (pathname.includes('/influencers/available-campaigns')) return '/influencers/available-campaigns';
        if (pathname.includes('/influencers/earnings')) return '/influencers/earnings';
        if (pathname.includes('/influencers/settings')) return '/influencers/settings';
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

            {/* Influencer toggle (show/hide influencer routes) */}
            <div style={{ padding: '10px 16px', borderBottom: '1px solid #e8eaff' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12, color: '#666' }}>Show Influencer Routes</span>
                    <Switch checked={showInfluencerRoutes} onChange={(v) => setShowInfluencerRoutes(v)} size="small" />
                </label>
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
