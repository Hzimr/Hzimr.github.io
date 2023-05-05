import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            rocketseatmid: '#8257e5',
            rocketseatdark: '#633BBC',
            rocketseatlow: '#271A45',
            discorverlight: '#6A80FF',
            discorverdark: '#182049',
            successbase: '#1B873F',
            dangerbase: '#CC2937',
            warningbase: '#EB8A1D',
            newbase: '#07847E',
            texttitle: '#E1E1E6',
            textbase: '#C4C4CC',
            textsupport: '#8D8D99',
            placeholder: '#7C7C8A',

            white: '#FFF',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green300: '#00B37E',
            green500: '#00875F',

            presentation: '#434E5E',

            //White Color
            fundowhite: '#F5F7FA',

            //Black Color
            menu: '#1e2738',
            fundo: '#19202E',
            sidebar: '#212529',

        }
    }
})