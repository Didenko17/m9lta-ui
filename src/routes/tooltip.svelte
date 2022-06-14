<script lang="ts">
    import Button from "$lib/Button.svelte";
import Tooltip from "$lib/Tooltip.svelte";
</script>

<div class="tooltip-page">
    <h2>Tooltip</h2>
    <Tooltip tooltipText="Hi, I'm a tooltip)">
        <h3>Hover me to see tooltip</h3>
    </Tooltip>
    <Tooltip tooltipText="Hi, I'm a tooltip on regular text)">
        Hover me!
    </Tooltip>
</div>
