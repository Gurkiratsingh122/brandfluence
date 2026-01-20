import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 14,
        colorPrimary: '#6366f1', // Indigo-500: A premium looking primary color
        colorBgLayout: '#f3f4f6', // Gray-100: Soft background
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderRadius: 8,
    },
    components: {
        Layout: {
            siderBg: '#111827', // Gray-900: Deep dark sidebar
            triggerBg: '#1f2937',
        },
        Menu: {
            darkItemBg: '#111827',
            darkItemSelectedBg: '#6366f1', // Primary color for selected item
            darkItemColor: '#9ca3af', // Gray-400
            darkItemHoverColor: '#ffffff',
        },
        Card: {
            borderRadiusLG: 12,
            boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }
    },
};

export default theme;
