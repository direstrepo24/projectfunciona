import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neu-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Portfolio Value</p>
              <p className="text-2xl font-bold">$15,234.50</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="neu-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Gain</p>
              <p className="text-2xl font-bold text-green-600">+$234.12</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="neu-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Loss</p>
              <p className="text-2xl font-bold text-red-600">-$89.30</p>
            </div>
            <TrendingDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>
      
      <div className="neu-card">
        <h2 className="text-xl font-bold mb-4">Quick Trade</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter stock symbol"
            className="neu-input"
          />
          <div className="flex space-x-4">
            <button className="neu-button flex-1 bg-green-500 text-white">
              Buy
            </button>
            <button className="neu-button flex-1 bg-red-500 text-white">
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}