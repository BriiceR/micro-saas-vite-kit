import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx', // Point d'entrée pour ton package
      name: 'StarterViteKit', // Nom global pour le package
      fileName: (format) => `starter-vite-kit.${format}.js`, // Nom des fichiers de sortie
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Assure que ces dépendances ne sont pas incluses dans le bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});