import React from 'react';
import { PieChart, ArrowUpRight, ArrowDownRight, Briefcase } from 'lucide-react';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { symbol: 'AAPL', shares: 10, avgPrice: 150.23, currentPrice: 173.45, totalValue: 1734.50 },
    { symbol: 'GOOGL', shares: 5, avgPrice: 130.45, currentPrice: 141.89, totalValue: 709.45 },
    { symbol: 'MSFT', shares: 8, avgPrice: 350.67, currentPrice: 378.12, totalValue: 3024.96 },
  ];

  const totalPortfolioValue = portfolioItems.reduce((acc, item) => acc + item.totalValue, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      
      <div className="neu-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Portfolio Value</p>
            <p className="text-3xl font-bold">${totalPortfolioValue.toFixed(2)}</p>
          </div>
          <Briefcase className="w-10 h-10 text-blue-600" />
        </div>
      </div>
      
      <div className="neu-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Holdings</h2>
          <PieChart className="w-6 h-6 text-blue-600" />
        </div>
        
        <div className="space-y-6">
          {portfolioItems.map((item) => {
            const profitLoss = (item.currentPrice - item.avgPrice) * item.shares;
            const profitLossPercentage = ((item.currentPrice - item.avgPrice) / item.avgPrice) * 100;
            
            return (
              <div key={item.symbol} className="neu-card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{item.symbol}</h3>
                    <p className="text-gray-600">{item.shares} shares</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">${item.totalValue.toFixed(2)}</p>
                    <p className="text-gray-600">Avg: ${item.avgPrice.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <p className={`flex items-center ${profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {profitLoss >= 0 ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    ${Math.abs(profitLoss).toFixed(2)} ({Math.abs(profitLossPercentage).toFixed(2)}%)
                  </p>
                  <button className="neu-button bg-blue-500 text-white">
                    Trade
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;