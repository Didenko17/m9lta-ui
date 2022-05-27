import { getContext } from "svelte"

export const getThemeFromContext = (propsTheme) => {
    return propsTheme || getContext("m9lta-ui-theme")?.theme || "default";
}