
import dayjs from 'dayjs';

export const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
];

export const billedViewsData = Array.from({ length: 20 }).map((_, i) => ({
    key: i,
    id: `INV-${1000 + i}`,
    client: `Client ${i + 1}`,
    date: dayjs().subtract(i, 'day').format('YYYY-MM-DD'),
    amount: (Math.random() * 1000).toFixed(2),
    status: Math.random() > 0.5 ? 'Paid' : 'Pending',
    views: Math.floor(Math.random() * 50000),
}));

export const topClients = [
    { name: 'Acme Corp', amount: 12000, trend: '+15%' },
    { name: 'Global Tech', amount: 8500, trend: '+5%' },
    { name: 'Nebula Inc', amount: 5000, trend: '-2%' },
];
