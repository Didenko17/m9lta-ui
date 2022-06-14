<script lang="ts">
import { createEventDispatcher } from "svelte";


    export let color = '#454545'
    export let rounded = false
    export let canDelete = false

    const dispatch = createEventDispatcher()

    const onDelete = (e) => {
        dispatch('delete', e)
    }

</script>

<div
    class="tag"
    class:rounded
    style:color
    style:border-color={color}
>
    <slot />
    {#if canDelete}
        <div class="delete" on:click={onDelete}></div>
    {/if}
</div>

<style>
.tag {
    display: inline-flex;
    padding: 3px 5px;
    margin: 10px;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    font-size: 12px;
    border-radius: 3px;
}
.rounded {
    border-radius: 15px;
}

.delete {
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background: center / contain no-repeat url('./icons/delete.svg');
}
</style>