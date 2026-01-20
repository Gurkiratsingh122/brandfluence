import React from 'react';
import { ConfigProvider } from 'antd';
import AntdRegistry from '@/components/AntdRegistry';
import ReduxProvider from '@/store/ReduxProvider';
import theme from '@/theme/themeConfig';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
