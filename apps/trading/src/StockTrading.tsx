import React, { useState } from 'react';
import { Search, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StockTrading: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 173.45, change: 2.34 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.89, change: -1.23 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.12, change: 4.56 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 174.90, change: -0.78 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Stock Trading</h1>
      
      <div className="neu-card">
        <div className="relative">
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="neu-input pl-12"
          />
          <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="grid gap-6">
        {mockStocks.map((stock) => (
          <div key={stock.symbol} className="neu-card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{stock.symbol}</h3>
                <p className="text-gray-600">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${stock.price}</p>
                <p className={`flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change >= 0 ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(stock.change)}%
                </p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="neu-button flex-1 bg-green-500 text-white">
                Buy
              </button>
              <button className="neu-button flex-1 bg-red-500 text-white">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTrading;