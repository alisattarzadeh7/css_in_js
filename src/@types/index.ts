import ThemeConfig from "../Config/theme.config.json";


export type ThemeType = typeof ThemeConfig


export type PropsWithTheme<T = unknown> = T & { theme?: ThemeType | undefined };