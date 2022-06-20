<script lang="ts">
    import Table, {Column} from "$lib/Table.svelte";

    export let data = [];

    const columns: Column[] = [
        {
            name: "Props",
            key: "props",
            dataKey: "props",
        },
        {
            name: "Type",
            key: "type",
            dataKey: "type",
        },
        {
            name: "Defaut value",
            key: "default",
            dataKey: "default",
        }
    ] 
</script>

<div class="props-table">
    <Table {columns} {data} />
</div>