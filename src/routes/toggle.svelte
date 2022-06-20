<script lang="ts">
    import Code from "$lib/Code.svelte";
import Toggle from "$lib/Toggle.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import snippet from "../snippets/toggle";

    let toggle1 = true;
    let toggle2 = false;

    const props: PropsTableRow[] = [
        {
            props: "offText",
            type: "string",
            default: "off"
        },
        {
            props: "onText",
            type: "string",
            default: "on",
        },
        {
            props: "value",
            type: "boolean",
            default: "false",
        }
    ]

</script>

<div class="toggle-page">
    <h1>Toggle</h1>
    <h2>Default usage</h2>
    <p>You can use Toggle for switching between two cases. Use bind:value to bind Toggle value to variable.</p>
    <Toggle bind:value={toggle1} />
    <Code>{snippet.default}</Code>
    <h2>offText/onText props</h2>
    <p>You can set the text for false and true values using props offText and onText.</p>
    <Toggle
        offText="Close"
        onText="Open"
        bind:value={toggle2}
    />
    <Code>{snippet.text}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>