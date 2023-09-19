import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        preference: 'ligth'
    },
    components: [
        {
            path: '~/shared/components',
            extensions: ['.vue'],
        }
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            htmlAttrs: {
                'data-theme': 'dark'
            },
            title: 'SchoolDriver',
            charset: 'utf-8',
            meta: [],
            link: [],
        }
    },
})