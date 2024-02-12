import { defineConfig, resolveEnvPrefix } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'vite-plugin-env'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_",
  plugins: [react(),
    envCompatible(),
    
  env({
    ConfigFile:'.env'
  })],
})
