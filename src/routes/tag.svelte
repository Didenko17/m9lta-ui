<script lang="ts">
    import Tag from "$lib/Tag.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import EventsTable from "../lib/docs/EventsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import type { EventsTableRow } from "src/types/EventsTableRow";

    const props: PropsTableRow[] = [
        {
            props: "color",
            type: "string",
            default: "#454545",
        },
        {
            props: "rounded",
            type: "boolean",
            default: "false",
        },
        {
            props: "canDelete",
            type: "boolean",
            default: "false",
        }
    ]

    const events: EventsTableRow[] = [
        {
            name: "delete",
            params: "e: CustomEvent",
            description: "Works on delete icon click.",
        }
    ]

</script>

<div class="tag-page">
    <h1>Tag</h1>
    <h2>Tag basic usage</h2>
    <p>Use props color to set the color of the Tag. You can use any string that CSS recognizes (hex, rgb, etc.).</p>
    <Tag>Basic</Tag>
    <Tag color="#08A045">Green tag</Tag>
    <Tag color="#B3001B">Red tag</Tag>
    <Tag color="#1674E0">Primaty tag</Tag>
    <h2>Tag rounded</h2>
    <p>Use props rounded to round the corners of the Tag</p>
    <Tag rounded>Basic</Tag>
    <Tag rounded color="#08A045">Green tag</Tag>
    <Tag rounded color="#B3001B">Red tag</Tag>
    <Tag rounded color="#1674E0">Primaty tag</Tag>
    <h2>canDelete props</h2>
    <p>Props canDelete adds a delete icon to the Tag, which, when clicked, brings up the delete event.</p>
    <Tag canDelete on:delete={(e)=>{console.log(e.detail)}}>Basic</Tag>
    <Tag canDelete on:delete={(e)=>{console.log(e.detail)}} color="#08A045">Green tag</Tag>
    <Tag canDelete rounded on:delete={(e)=>{console.log(e.detail)}} color="#B3001B">Red tag</Tag>
    <Tag canDelete rounded on:delete={(e)=>{console.log(e.detail)}} color="#1674E0">Primaty tag</Tag>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>