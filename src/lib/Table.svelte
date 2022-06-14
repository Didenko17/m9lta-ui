<script lang="ts" context="module" >
    export type Column = {
        name: string,
        key: string,
        onSort?: (a, b) => number,
        onFilter?: (a, b) => boolean,
        isSort?: boolean,
        isFilter?: boolean,
        type?: 'text' | 'button' | 'icon' | 'link' | 'component'
        dataKey?: string,
        component?: any,
        componentProps?: {
            [key: string]: string
        },
        componentSlots?: string,
        iconSrc?: string,
        linkHref?: string,
        linkText?: string,
        buttonText?: string,
    }
</script>
<script lang="ts">
    import Button from "./Button.svelte"
    import Link from "./Link.svelte"

    export let columns: Column[] = []
    export let data = []

    let sorts = {}
    let stateTable = []

    $: {
        stateTable = [...data];
    }

    $: {
        columns.forEach(item => {
            if (item.isFilter) {
                sorts = {
                    ...sorts,
                    [item.dataKey] : false,
                }
            }
        });
    }

    const sortCol = (col: column ) => {
        if (sorts[col.dataKey]) {
            stateTable = [...data];
            sorts = { ...sorts, [col.dataKey] : false }
        } else {
            stateTable = [...data].sort((a, b) => col.onSort ? col.onSort(a, b) : a[col.dataKey] < b[col.dataKey] ? -1 : 1 )
            sorts = { ...sorts, [col.dataKey] : true }
        }
        console.log(sorts)
    }


</script>

<div class="table-wrapper">
    <table>
        <tr class="header-row">
            {#each columns as col (col.key) }
                <th>
                    <div class="header-cell">
                        { col.name }
                        <div class="header-cell-controls">
                            {#if col.isFilter}
                                <div class="col-filter"></div>
                            {/if}
                            {#if col.isSort }
                                <div
                                    class="col-sort"
                                    class:active={ sorts[col.dataKey] === true }
                                    on:click={() => sortCol(col)}
                                ></div>
                            {/if}
                        </div>
                    </div>
                </th>
            {/each}
        </tr>
        {#each stateTable as row, row_index (row_index) }
            <tr class="data-row">
                {#each columns as cell}
                    <td class="data-cell">
                        {#if cell.type === 'component'}
                            <div class="data-cell-component">
                                <svelte:component this={cell.component} {...cell.componentProps}>
                                    {cell.componentSlots}
                                </svelte:component> 
                            </div>
                            
                            {:else if cell.type === 'icon'}
                                <div class="data-cell-icon" style:background={`center / contain no-repeat url('${cell.iconSrc}')`} ></div>
                            {:else if cell.type === 'link'} 
                                <Link to={cell.linkHref}>{cell.linkText}</Link>
                            {:else if cell.type === 'button'}
                                <Button type='primary' >{cell.buttonText}</Button>
                            {:else}
                            { row[cell.dataKey] }
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>


<style>
table {
    margin-top: 20px;
}

table, tr, th, td {
    border-collapse: collapse;
}

tr, th, td {
    border: 1px solid #dadada;
    color: #454545;
    padding: 5px 10px;
    font-size: 14px;
}

th {
    background-color: #eee;
    color: #666;
}

.header-cell, .header-cell-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.col-filter, .col-sort {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.col-filter {
    background: center / contain no-repeat url('./icons/table-filter.svg');
}
.col-sort {
    background: center / contain no-repeat url('./icons/table-sort-down.svg');
}
.col-sort.active {
    background: center / contain no-repeat url('./icons/table-sort-down-active.svg');
}


.data-cell-icon {
    height: 23px;
    cursor: pointer;
}
</style>