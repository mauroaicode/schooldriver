
import {ref} from 'vue';
import {defineStore} from "pinia";
import {useColorMode} from "#imports";


export const useChangeThemeStore = defineStore('changeThemeStore', () => {

    const colorMode = useColorMode()
    const theme = ref<string>(colorMode.value)
    const isDark = ref<boolean>(false)

    const changeTheme = () => {

        isDark.value = !isDark.value
        theme.value = 'light'
        colorMode.preference = 'light'

        if (isDark.value){
            theme.value = 'dark'
            colorMode.preference = 'dark'
        }
    }

    const currentTheme = (currentTheme: string) => {
        theme.value = currentTheme
        currentTheme === 'light' ? isDark.value = false : isDark.value = true
    }

    return {
        //State properties
        isDark,
        theme,
        //Actions
        changeTheme,
        currentTheme
    }

})