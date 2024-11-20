import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StockTrading from './StockTrading';
import './index.css';
import '../../host/src/styles/global.scss';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <div className="p-8 bg-[#f0f3f9] min-h-screen">
        <StockTrading />
      </div>
    </StrictMode>
  );
}