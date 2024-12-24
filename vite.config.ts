import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      shortcuts: [
        {
          logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
        },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
  ],
})
