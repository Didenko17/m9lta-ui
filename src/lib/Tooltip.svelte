<script lang="ts">
    export let tooltipText = ''

    let isVisible = false;
</script>

<span 
    class="tooltip-wrapper"
    on:mouseenter={ () => isVisible = true }
    on:mouseleave={ () => isVisible = false }
    >
    {#if isVisible}
        <div class="tooltip">
            <div class="tooltip-text">
                { tooltipText }
            </div>
        </div>
    {/if}
    <slot/>
</span>

<style>
    .tooltip-wrapper {
        position: relative;
        width: max-content;
    }
    .tooltip {
        position: absolute;
        width: max-content;
        padding: 6px;
        bottom: 120%;
        font-size: 14px;
        background-color: #fafafa;
        border: 1px solid #cacaca;
        border-radius: 3px;
    }

    .tooltip::after {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        width: 10px;
        background-color: #fafafa;
        bottom: -5px;
        box-sizing: border-box;
        border: 1px solid #cacaca;
        clip-path: polygon( 0 100%, 100% 0, 100% 100%);
        transform: rotate(45deg);
    }

    .tooltip-text {
        color: #454545;
    }
</style>