<script lang="ts">

    export let width = "320px"
    export let height = "240px"

</script>

<div
    class="example"
    style:width
    style:height    
>
    <slot />
</div>

<style>
.example {
    margin: 10px;
    border: 1px solid #cacaca;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: flex-end;
    overflow-y: auto;
}
</style>