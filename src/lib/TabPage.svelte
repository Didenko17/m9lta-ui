<script lang="ts" context="module">
    export type Tab = {
        name: string,
        key: string,
    }
</script>
<script lang="ts">
    export let key: string = ''
    export let current: Tab = null
</script>

<div
    class="tab-page"
    class:hidden={ key !== current.key }
>
    <slot />
</div>

<style>
.tab-page {
    height: 100%;
    width: 100%;
}

.hidden {
    display: none;
}

</style>