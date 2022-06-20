<script lang="ts">
    export let tooltipText = ''
    export let position: 'top' | 'right' | 'bottom' | 'left' = 'top'

    let isVisible = false;
</script>

<div 
    class="tooltip-wrapper"
    on:mouseenter={ () => isVisible = true }
    on:mouseleave={ () => isVisible = false }
    >
    {#if isVisible}
        <div class={'tooltip ' + position }>
            <div class="tooltip-text">
                { tooltipText }
            </div>
        </div>
    {/if}
    <slot/>
</div>

<style>
    .tooltip-wrapper {
        display: inline-flex;
        height: max-content;
        position: relative;
        width: max-content;
    }
    .tooltip {
        position: absolute;
        width: max-content;
        padding: 6px;
        font-size: 14px;
        background-color: #fafafa;
        border: 1px solid #cacaca;
        border-radius: 3px;
    }

    .tooltip.top{
        bottom: 120%;
    }

    .tooltip.right{
        left: 100%;
    }
    .tooltip.bottom{
        top: 120%;
    }

    .tooltip.left{
        right: 100%;
    }

    .tooltip::after {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        width: 10px;
        background-color: #fafafa;
        box-sizing: border-box;
        border: 1px solid #cacaca;
        clip-path: polygon( 0 100%, 100% 0, 100% 100%);
    }

    .tooltip.top::after {
        left: 10%;
        bottom: -5px;
        transform: rotate(45deg);
    }
    .tooltip.bottom::after {
        left: 10%;
        top: -5px;
        transform: rotate(-135deg);
    }
    .tooltip.left::after {
        right: -5px;
        top: 60%;
        transform: translateY(-50%) rotate(-45deg);
    }
    .tooltip.right::after {
        left: -5px;
        top: 60%;
        transform: translateY(-50%) rotate(135deg);
    }

    .tooltip-text {
        color: #454545;
    }
</style>