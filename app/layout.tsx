import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '10分でリール動画を作る講座',
  description: 'Instagram運用・AI・世界観設計を扱う女性向け講座LP'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
