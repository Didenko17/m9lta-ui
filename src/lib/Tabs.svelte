<script lang="ts">

    interface Tab {
        name: string,
        key: string,
    }

    export let width: string = '500px';
    export let height: string = '300px';
    export let tabs: Tab [] = []

    let current: Tab;

    $: current = tabs[0]

    const setCurrent = (tab: Tab) => {
        current = tab
    }

</script>

<div class="tabs"
    style:height
    style:width
>
    <div class="tabs-bar">
        {#each tabs as tab (tab.key)}
            <div 
                class="tab-select"
                class:active={ tab.key === current.key }
                on:click={() => setCurrent(tab)}
            >
                {tab.name}
            </div>
        {/each}
    </div>

    <div class="tab">
        <slot {current} />
    </div>

</div>

<style>
.tabs {
    border: 1px solid #cacaca;
    background-color: #fefefe;
    border-radius: 3px;
    font-size: 14px;
}

.tabs-bar {
    width: 100%;
    height: 32px;
    padding: 5px 5px 0 5px;
    border-bottom: 1px solid #cacaca;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #eee;
}

.tab-select {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
}

.tab-select.active {
    background-color: #fff;
    color: #1674E0;
}

.tab {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
}
</style>