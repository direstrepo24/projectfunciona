import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ErrorBoundary } from './components/ErrorBoundary';

const StockTrading = React.lazy(() => import('trading/StockTrading'));
const Portfolio = React.lazy(() => import('portfolio/Portfolio'));

function App() {
  return (
    <Router>
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/trading"
              element={
                <React.Suspense fallback={<div className="neu-card p-4">Loading Trading module...</div>}>
                  <StockTrading />
                </React.Suspense>
              }
            />
            <Route
              path="/portfolio"
              element={
                <React.Suspense fallback={<div className="neu-card p-4">Loading Portfolio module...</div>}>
                  <Portfolio />
                </React.Suspense>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
}

export default App;