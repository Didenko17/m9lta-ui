<script lang="ts">
    import Input from "$lib/Input.svelte"
    import PropsTable from "../components/propsTable.svelte";
    import EventsTable from "../components/eventsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import type { EventsTableRow } from "src/types/EventsTableRow";
    import Code from "$lib/Code.svelte";
    import snippet from "../snippets/input";

    let textInputValue = "";
    let numberInputValue = 17;
    let passwordInputValue = "";

    const props: PropsTableRow[] = [
        {
            props: "type",
            type: "'text' | 'number' | 'email' | 'password'",
            default: "'text'",
        },
        {
            props: "label",
            type: "string",
            default: "''",
        },
        {
            props: "labelType",
            type: "'top' | 'left'",
            default: "'top'",
        },
        {
            props: "placeholder",
            type: "string",
            default: "''",
        },
        {
            props: "value",
            type: "string | number",
            default: "null",
        },
        {
            props: "name",
            type: "string",
            default: "null",
        },
        {
            props: "id",
            type: "string",
            default: "null",
        },
    ]

    const events: EventsTableRow[] = [
        {
            name: "focus",
            params: "e: Event | CustomEvent",
            description: "Works on Input focus."
        },
        {
            name: "blur",
            params: "e: Event | CustomEvent",
            description: "Works on Input blur."
        },
        {
            name: "input",
            params: "e: Event",
            description: "Works on input value."
        },
    ]
</script>
<div class="input-page">
    
    <h1>Input</h1>
    <h2>Input [type="text"]</h2>
    <Input
        placeholder="Input value"
        bind:value={textInputValue}
    />
    <Code>{snippet.text}</Code>
    <h2>Input [type="number"]</h2>
    <Input 
        type="number" 
        placeholder="Input number" 
        label="Age" 
        bind:value={numberInputValue} 
    />
    <Code>{snippet.number}</Code>
    <h2>Input [type="password"]</h2>
    <Input 
        type="password" 
        placeholder="Input password" 
        label="Password"
        bind:value={passwordInputValue}
    />
    <Code>{snippet.password}</Code>
    <h2>Input [type="email"]</h2>
    <Input
        id="email"
        name="email"
        type="email"
        placeholder="Input email"
        label="Email"
    />
    <Code>{snippet.email}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>