import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Removed the external configuration for @supabase/supabase-js
  // to ensure it's properly bundled with your application
});
