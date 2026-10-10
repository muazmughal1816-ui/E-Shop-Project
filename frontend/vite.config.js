import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [
    react({
      // Forces the underlying compiler to treat all .js files in the project as JSX files
      jsxRuntime: 'automatic',
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    })
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
