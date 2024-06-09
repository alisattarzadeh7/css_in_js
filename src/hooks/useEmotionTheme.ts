import {useTheme} from "@emotion/react";
import {ThemeType} from "../@types";


const useEmotionTheme = ()=>{
    return useTheme() as ThemeType
}

export default useEmotionTheme