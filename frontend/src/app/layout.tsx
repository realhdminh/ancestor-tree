/**
 * @project AncestorTree
 * @file src/app/layout.tsx
 * @description Root layout with providers (Auth, Tooltip, Toaster)
 * @version 2.0.0
 * @updated 2026-02-25
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/auth/auth-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.fullTitle,
    template: `%s | ${siteConfig.appTitle} ${siteConfig.clanName}`,
  },
  description: siteConfig.description,
  keywords: [
    'gia phả',
    'gia phả điện tử',
    siteConfig.clanName,
    siteConfig.clanLocation,
    'dòng họ',
    'cây gia phả',
    'phả hệ',
  ],
  authors: [{ name: `${siteConfig.clanName} ${siteConfig.clanLocation}` }],
  openGraph: {
    title: siteConfig.fullTitle,
    description: siteConfig.tagline,
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <QueryProvider>
          <AuthProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
