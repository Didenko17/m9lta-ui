<script lang="ts">

    import { getMenuTypeFromContext } from "./hooks/getMenuTypeFromContext";
    import { getThemeFromContext } from "./hooks/getThemeFromContext";
    import subMenuArrowDown from "./icons/submenu-arrow-down.svg";
    import subMenuArrowTop from "./icons/submenu-arrow-top.svg";
    
    export let name = "Submenu";
    
    let isOpen = false;
    
    const menuType = getMenuTypeFromContext();
    const theme = getThemeFromContext();
    
    const toggleOpen = function () {
        isOpen = !isOpen
    }

</script>

<div 
    class="{ 'submenu submenu-' + menuType + ' ' + theme }"
    on:mouseenter={menuType === 'header' ? toggleOpen : null}
    on:mouseleave={menuType === 'header' ? toggleOpen : null}
>
    <div class="submenu-name" on:click={toggleOpen}>
        { name }
        {#if menuType === 'aside'}
            <img
                class="arrow"
                alt={isOpen? "Close" : "Open" }
                src={ isOpen? subMenuArrowTop : subMenuArrowDown }
            />
        {/if}
    </div>
    {#if isOpen}
        <div class="submenu-content">
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    .submenu-name {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 10px;
        font-size: 14px;
        cursor: pointer;
    }
    .submenu-aside .submenu-name {
        color: #454545;
        width: 100%;
        justify-content: space-between;
    }
    .submenu-aside .submenu-name img {
        height: 12px;
    }
    .submenu-aside .submenu-name:hover {
        background-color: rgba(190,190,190,0.5);
    }
    .submenu-aside .submenu-content :global(.menu-item) {
        padding-left: 1.5rem ;
    }
    .submenu-header {
        position: relative;
    }
    .submenu-header .submenu-name {
        width: max-content;
        justify-content: space-between;
    }
    .submenu-header .submenu-content {
        position: absolute;
        border: 1px solid #cacaca;
        left: 50%;
        transform: translateX(-50%);
    }
    .submenu-header.dark .submenu-content :global(.menu-item) {
        color: #05203f;
    }
    .submenu-header .submenu-content :global(.menu-item):hover {
        color: #454545;
        background-color: #cacaca;
    }
    .submenu-header .submenu-content :global(.menu-item.active) {
        background-color: #dadada;
        color: #454545;
    }
    .submenu-header.default .submenu-content :global(.menu-item){
        color: #454545;
    }
</style>