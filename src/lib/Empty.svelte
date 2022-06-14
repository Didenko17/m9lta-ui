<script lang="ts">
    import emptyIcon from "./icons/empty.svg"

    export let width = '300px'
    export let height = '200px'
    export let icon = ''
    export let text = 'Empty data'

    $: {
        if (!icon) {
            icon = emptyIcon
        }
    }
</script>

<div
    class="empty"
    style:width
    style:height
>
    <div
        class="empty-icon"
        style:background={`center / contain no-repeat url('${icon}')`}    
    >

    </div>
    <div class="empty-text">
        {text}
    </div>
</div>

<style>
    .empty {
        margin: 10px 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #cacaca;
        border-radius: 3px;
        font-size: 14px;
    }
    .empty-icon {
        height: 48px;
        width: 48px;
    }
    .empty-text {
        color: #aaa;
    }
</style>