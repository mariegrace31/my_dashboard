import "./globals.css";
import Sidebar from './components/Sidebar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

