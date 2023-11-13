// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
      ],
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        }
    ]
})
