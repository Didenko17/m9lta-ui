<script lang="ts">
    export let value = ''
    export let units = '%'
    export let name = ''
    export let icon = ''
</script>

<div class="statistic">
    {#if name}
        <div class="statistic-name">
            {name}
        </div>
    {/if}
    <div class="statistic-body">
        {#if icon}
            <div
                class="statistic-icon"
                style:background={`center / contain no-repeat url('${icon}')`}
            ></div>
        {/if}
        {#if value}
            <div class="statistic-value">
                {value}
            </div>
        {/if}
        {#if units}
            <div class="statistic-units">
                {units}
            </div>
        {/if}
    </div>
</div>

<style>
.statistic {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 10px;   
    padding: 10px;
    border: 1px solid #dadada;
    border-radius: 3px;
    color: #666;
}

.statistic-name {
    width: 100%;
    height: 20px;
    font-size: 14px;
    margin-bottom: 10px;
    color: #aaa;
}
.statistic-body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.statistic-icon {
    height: 24px;
    width: 24px;
    margin: 0 10px;
}

.statistic-value, .statistic-units {
    font-size: 32px;
    margin-right: 10px;
}

</style>