<script lang="ts">
    import RadioInput from "$lib/RadioInput.svelte";
    import PropsTable from "$lib/docs/propsTable.svelte";
    import EventsTable from "../lib/docs/EventsTable.svelte";
    import type { PropsTableRow } from "../types/PropsTableRow";
    import type { EventsTableRow } from "../types/EventsTableRow";
    import snippet from "../snippets/radio"
import Code from "$lib/Code.svelte";

    let radioGroup = "2";

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
            type: "string",
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
            params: "e: Event",
            description: "Works on state change.",
        },
        {
            name: "input",
            params: "e: Event",
            description: "Works on state input.",
        },
    ]

    $: {
        console.log(radioGroup);
    }

</script>

<div class="radio-page">
    <h1>RadioInput</h1>
    <h2>Radio basic usage</h2>
    <p>The RadioInput component is used to select one value from several options.</p>
    <RadioInput value="1" label="one" />
    <RadioInput value="2" label="two" />
    <Code>{snippet.default}</Code>
    <h2>Radio group</h2>
    <p>Use bind:group to bind different RadioInputs to same group.</p>
    <RadioInput 
        bind:group={radioGroup} 
        value="1" 
        label="one" 
    />
    <RadioInput
        bind:group={radioGroup} 
        value="2" 
        label="two" 
    />
    <RadioInput
        bind:group={radioGroup} 
        value="3" 
        label="three" 
    />
    <Code>{snippet.group}</Code>
    <h2>Block props</h2>
    <p>Use block props to display radioGroup as block.</p>
    <RadioInput block value="1" label="one" />
    <RadioInput block value="2" label="two" />
    <Code>{snippet.block}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>