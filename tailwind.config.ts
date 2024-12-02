import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{vue,js,ts}",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        'button-shadow': '0 6px 15px rgba(0,0,0,0.2),0 3px 6px rgba(0,0,0,0.1)',  // 自定义阴影效果
      },
      colors: {
        'grey1': '#333333',
      }
    },
  },
  plugins: [],
} satisfies Config

