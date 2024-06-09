import {ThemeProvider} from '@emotion/react'
import {PropsWithChildren} from "react";
import ThemeConfig from "../Config/theme.config.json"


const EmotionThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (<ThemeProvider theme={ThemeConfig}>
        {children}
    </ThemeProvider>)
}

export default EmotionThemeProvider