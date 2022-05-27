import { getContext } from "svelte"

export const getMenuTypeFromContext = () => {
    return getContext("m9lta-ui-menu-type");
}