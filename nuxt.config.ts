// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      country: {
        australia: 'Australia',
        australias: 'Australia\'s',
        australian: 'Australian'
      },
      currency: {
        default: 1
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  colorMode: {
    preference: 'light'
  },
  nitro: {
    output: {
      publicDir: process.env.NITRO_OUTPUT_PUBLICDIR || '.output/public_au'
    }
  },
  elementPlus: {
    icon: false,
    //importStyle: false,
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
