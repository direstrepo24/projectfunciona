import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Wallet, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#f0f3f9]">
      <nav className="w-64 p-6 space-y-6">
        <div className="neu-card flex items-center space-x-3">
          <LineChart className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-xl">StockApp</span>
        </div>
        
        <div className="space-y-2">
          <Link to="/" className="neu-button flex items-center space-x-3 w-full">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link to="/trading" className="neu-button flex items-center space-x-3 w-full">
            <LineChart className="w-5 h-5" />
            <span>Trading</span>
          </Link>
          
          <Link to="/portfolio" className="neu-button flex items-center space-x-3 w-full">
            <Wallet className="w-5 h-5" />
            <span>Portfolio</span>
          </Link>
        </div>
      </nav>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}