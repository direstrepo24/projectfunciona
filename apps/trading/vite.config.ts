import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'trading',
      filename: 'remoteEntry.js',
      exposes: {
        './StockTrading': './src/StockTrading.tsx'
      },
      remotes: {
        ui: 'http://localhost:5003/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  }
});