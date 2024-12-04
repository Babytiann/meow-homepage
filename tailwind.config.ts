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
      transitionProperty: {
        'bgs-color': 'background-size, color',
      },
      transitionDuration: {
        '350': '350ms',
      },
      boxShadow: {
        'button-shadow': '0 6px 15px rgba(0,0,0,0.2),0 3px 6px rgba(0,0,0,0.1)',  // 自定义阴影效果
        'panel-shadow': '0 0 50px rgba(0 0 0 / 25%)',  // 自定义阴影效果
      },
      colors: {
        'grey1': '#333333',
        'centerBg': 'rgba(255, 255, 255, 0.1)',
        'wewak': {
          '50': '#fdf3f4',
          '100': '#fbe8eb',
          '200': '#f6d5da',
          '300': '#ea9daa',
          '400': '#e58799',
          '500': '#d75c77',
          '600': '#c13d60',
          '700': '#a22e4f',
          '800': '#882947',
          '900': '#752642',
          '950': '#411020',
        }
      },
      backdropFilter: {
        'contrast-120': 'contrast(1.2)', // 自定义的对比度 1.2
      },
      backgroundSize: {
        'n': '0 2px',  //起始状态
        '100': '100% 100%',  //结束状态
      },
    },
  },
  plugins: [],
} satisfies Config

