// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    //'@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  colorMode: {
    preference: 'light'
  },
  image: {
    format: ['webp', 'png', 'jpg', 'jpeg'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
    }
  },
  components: [
    {
        path: '~/components',
        extensions: ['.vue'],
    }],
  devtools: { enabled: true }
})
