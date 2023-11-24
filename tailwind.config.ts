import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          '50': '#edfcff',
          '100': '#b1ddff',
          '200': '#8bd2ff',
          '300': '#76c1f1',
          '400': '#2eaeff',
          '500': '#009cff',
          '600': '#008de7',
          '700': '#007dcd',
          '800': '#005e99',
          '900': '#003e66',
          '950': '#0e3c5d',
        }
      }
    }
  }
}