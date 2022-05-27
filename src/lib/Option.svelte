<script lang="ts">
    export let disabled: boolean = false;
    export let selected: boolean = false;
</script>
<div class="option" on:click class:selected class:disabled>
    <slot></slot>
</div>
<style>
.option {
    padding: 6px;
    width: 100%;
    border-bottom: 1px solid #cacaca;
}
.option:last-child {
    border-bottom: none;
}
.selected {
    background-color: rgba(35, 22, 224, 0.1);
    color: #1674E0;
}
.disabled {
    background-color: #cacaca;
}
</style>