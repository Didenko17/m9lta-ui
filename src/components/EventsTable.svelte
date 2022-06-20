<script lang="ts">
    import Table, {Column} from "$lib/Table.svelte";

    export let data = [];

    const columns: Column[] = [
        {
            name: "Event",
            key: "name",
            dataKey: "name",
        },
        {
            name: "Params",
            key: "params",
            dataKey: "params",
        },
        {
            name: "Description",
            key: "description",
            dataKey: "description",
        }
    ] 
</script>

<div class="events-table">
    <Table {columns} {data} />
</div>