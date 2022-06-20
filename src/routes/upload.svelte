<script lang="ts">
    import Upload from "$lib/Upload.svelte";
    import PropsTable from "../components/propsTable.svelte";
    import EventsTable from "../components/eventsTable.svelte";
    import type { PropsTableRow } from "../types/PropsTableRow";
    import type { EventsTableRow } from "../types/EventsTableRow";
    import snippet from "../snippets/upload";
import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "type",
            type: "'drag-and-drop' | 'button' | 'both'",
            default: "'drag-and-drop'",
        },
        {
            props: "accept",
            type: "string",
            default: "''",   
        },
        {
            props: "multiple",
            type: "boolean",
            default: "false",   
        },
    ]

    const events: EventsTableRow[] = [
        {
            name: "change",
            params: "e: CustomEvent",
            description: "Triggers when the state of the component changes. Contains an array of loaded files in e.detail.files ",
        },
        {
            name: "error",
            params: "e: CustomEvent",
            description: "Triggers a document type validation error in drag-and-drop. Contains error text in e.detail.text"
        }
    ]
</script>

<div class="upload-page">
    <h2>Upload</h2>
    <h2>Upload default usage</h2>
    <Upload type='drag-and-drop'/>
    <Code>{snippet.default}</Code>
    <h2>Upload accept</h2>
    <Upload 
        type='both' 
        multiple  
        accept='.docx, .png'
    />
    <Code>{snippet.accept}</Code>
    <h2>Upload multiple</h2>
    <Upload type='button' multiple/>
    <Code>{snippet.multiple}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>