<script lang="ts">
    export let value = 0;
    export let max = 100;

    let percentValue = 0;

    $: {
        percentValue = Math.round(value / max * 100 * 100) / 100;
    }

</script>

<div class="progress">
    <div class="progress-value" style:width={ percentValue + '%' } >
    </div>
</div>

<style>
.progress {
    width: 190px;
    height: 9px;
    margin: 10px;
    background-color: #fafafa;
    border: 1px solid #cacaca;
    overflow: hidden;
    border-radius: 4px;
}

.progress-value {
    height: 10px;
    background-color: #1674E0;
    max-width: 100%;
}
</style>
