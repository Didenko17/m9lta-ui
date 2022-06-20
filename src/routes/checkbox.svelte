<script lang="ts">
    import Checkbox from "$lib/Checkbox.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import EventsTable from "$lib/docs/EventsTable.svelte";
    import type { PropsTableRow } from "../types/PropsTableRow";
    import type { EventsTableRow } from "../types/EventsTableRow";
    import snippet from "../snippets/checkbox";
    import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "label",
            type: "string",
            default: "''",
        },
        {
            props: "checked",
            type: "boolean",
            default: "false",
        },
        {
            props: "group",
            type: "string[ ]",
            default: "null",
        },
        {
            props: "value",
            type: "string",
            default: "''",
        },
        {
            props: "name",
            type: "string",
            default: "null",
        },
        {
            props: "id",
            type: "string",
            default: "null"
        },
        {
            props: "block",
            type: "boolean",
            default: "false",
        },
    ]

    const events: EventsTableRow[] = [
        {
            name: "change",
            params: "e: CustomEvent",
            description: "Works on state change.",
        },
        {
            name: "input",
            params: "e: Event",
            description: "Works on state input.",
        },
    ]

    let cartGroup = [];
    let petsGroup = [];

    const onChange = (e) => {
        console.log(e.detail)
    }


</script>

<div class="checkbox-page">
    <h1>Checkbox</h1>
    <h2>Default usage</h2>
    <Checkbox 
        bind:group={cartGroup} 
        value="milk" 
        label="milk"
    />
    <Checkbox
        bind:group={cartGroup} 
        value="water" 
        label="water"
    />
    <Checkbox
        bind:group={cartGroup} 
        value="banana" 
        label="banana"
    />
    <Code>{snippet.default}</Code>
    <h2>Block props</h2>
    <Checkbox 
        block 
        bind:group={petsGroup}
        value="dog" 
        label="dog" 
    />
    <Checkbox 
        block 
        bind:group={petsGroup} 
        value="cat" 
        label="cat" 
    />
    <Checkbox 
        block 
        bind:group={petsGroup} 
        value="hamster" 
        label="hamster" 
    />
    <Code>{snippet.block}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>