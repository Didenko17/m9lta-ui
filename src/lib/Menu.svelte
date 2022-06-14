<script lang="ts">

    import { setContext } from "svelte";
    
    export let type: "header" | "aside" = "header";
    
    setContext("m9lta-ui-menu-type", type);

</script>

<div class="{'menu menu-'+type}" >
    <slot></slot>
</div>

<style>
.menu-header {
    display: flex;
    width: max-content;
    height: 100%;
    padding: 0 10px;
}
.menu-aside {
    width: 100%;
}
</style>

