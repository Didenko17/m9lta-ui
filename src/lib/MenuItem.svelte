<script lang="ts">
    import { getMenuTypeFromContext } from "./hooks/getMenuTypeFromContext";
    import { getThemeFromContext } from "./hooks/getThemeFromContext";
    import {activeMenu} from "./stores/activeMenu.js"    
    
    function setActive () {
        $activeMenu = name;
    }

    export let name = "";
    export let to = "";

    const menuType = getMenuTypeFromContext();
    const theme = getThemeFromContext();
</script>
<a href={to} class="menu-item-link">
    <div class="{ 'menu-item menu-item-' + menuType + ' ' + theme}" class:active={name === $activeMenu} on:click={setActive} >		
            <slot/>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
    }
    .menu-item{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 10px;
        font-size: 14px;
        cursor: pointer;
    }
    
    .menu-item-header {
        width: max-content;
    }
    .menu-item-aside {
        color: #454545;
        width: 100%;
        padding: 10px;
        justify-content: flex-start;
        border-right: 3px solid transparent;
    }
    .menu-item-aside:hover {
        background-color: rgba(190,190,190,0.5);
    }
    .menu-item-aside.active {
        background-color: rgb(240, 240, 240);
    }
    .menu-item-aside.dark.active {
        border-right: 3px solid #05203f;
    }
    .menu-item-aside.default.active {
        border-right: 3px solid #1674E0;
    }
    .menu-item-aside.light.active {
        border-right: 3px solid #cacaca;
    }
    .menu-item-header.dark.active {
        background-color: rgba(7, 18, 56, 0.4);
    }
    .menu-item-header.light.active {
        background-color: rgba(202, 202, 202, 0.4);
    }
    .menu-item-header:hover{
        color: #cacaca;
    }
    .menu-item-header.light:hover {
        color: #1674E0;
    }
</style>