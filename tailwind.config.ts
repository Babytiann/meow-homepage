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
        'panel-shadow': '0 0 50px rgba(0 0 0 / 25%)',  // 自定义阴影效果
      },
      colors: {
        'grey1': '#333333',
        'centerBg': 'rgba(255, 255, 255, 0.1)',
      },
      backdropFilter: {
        'contrast-120': 'contrast(1.2)', // 自定义的对比度 1.2
      },
    },
  },
  plugins: [],
} satisfies Config

