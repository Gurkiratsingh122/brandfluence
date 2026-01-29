'use client';

import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Notification {
    id: number;
    title: string;
    time: string;
    type: 'success' | 'warning' | 'info' | 'image';
    image?: string;
    icon?: string;
}

interface NotificationsSectionProps {
    notifications?: Notification[];
}

export function NotificationsSection({ notifications }: NotificationsSectionProps) {
    const defaultNotifications: Notification[] = [
        {
            id: 1,
            title: 'Payment sent for @jenny Collab',
            time: 'Just Now',
            type: 'success',
            icon: '✓',
        },
        {
            id: 2,
            title: 'Payment sent for @jenny Collab',
            time: '30 mins ago',
            type: 'image',
            image: '/profile_brand.jpg',
        },
        {
            id: 3,
            title: 'Payment sent for @jenny Collab',
            time: '1hr ago',
            type: 'info',
            icon: '💰',
        },
    ];

    const notificationsToDisplay = notifications || defaultNotifications;

    const getIconElement = (notification: Notification) => {
        switch (notification.type) {
            case 'success':
                return (
                    <div className="w-8 h-8 bg-[#d4f4dd] rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#04b700]" />
                    </div>
                );
            case 'warning':
                return (
                    <div className="w-8 h-8 bg-[#fff4e6] rounded-full flex items-center justify-center shrink-0">
                        <AlertCircle className="w-5 h-5 text-[#fa8c16]" />
                    </div>
                );
            case 'info':
                return (
                    <div className="w-8 h-8 bg-[#e1f4ff] rounded-full flex items-center justify-center shrink-0">
                        <Info className="w-5 h-5 text-[#1890ff]" />
                    </div>
                );
            case 'image':
                return (
                    <img
                        src={notification.image || '/profile_brand.jpg'}
                        alt="notification"
                        className="w-8 h-8 rounded-full shrink-0"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <h3 className="text-[18px] font-bold text-[#111] mb-5">Notifications</h3>
            <div className="space-y-4">
                {notificationsToDisplay.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3">
                        {getIconElement(notification)}
                        <div className="flex-1 min-w-0">
                            <p className="text-[14px] font-medium text-[#111]">{notification.title}</p>
                            <p className="text-[12px] text-[#999]">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
