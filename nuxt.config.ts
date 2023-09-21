import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classPrefix: 'dark',
        dataValue: 'theme',
        classSuffix: ''
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
            title: 'SchoolDriver',
            charset: 'utf-8',
            meta: [],
            link: [],
        }
    },
})