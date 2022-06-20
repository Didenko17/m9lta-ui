<script lang="ts">
    import Empty from "$lib/Empty.svelte";
    import PropsTable from "../components/propsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from "../snippets/empty"
    import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "width",
            type: "string",
            default: "300px",
        },
        {
            props: "height",
            type: "string",
            default: "200px",
        },
        {
            props: "icon",
            type: "string",
            default: "''",
        },
        {
            props: "text",
            type: "string",
            default: "'Empty data'",
        },
    ]

</script>

<div class="empty-page">
    <h1>Empty</h1>
    <h2>Default usage</h2>
    <p>You can use an Empty to display no content.</p>
    <Empty />
    <Code>{snippet.default}</Code>
    <h2>Custom text or image</h2>
    <p>You can use text props or icon props to set custom text and icon values.</p>
    <Empty text="Custom empty text" />
    <Code>{snippet.text}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>