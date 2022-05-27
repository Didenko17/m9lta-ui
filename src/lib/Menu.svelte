<script lang="ts">
    import { setContext, onDestroy } from "svelte";
    
    export let type: string = "header";
    
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