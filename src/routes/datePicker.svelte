<script lang="ts">
    import DatePicker from "$lib/DatePicker.svelte";
    import EventsTable from "../components/EventsTable.svelte";
    import PropsTable from "../components/propsTable.svelte";
    import type { PropsTableRow } from "../types/PropsTableRow";
    import type { EventsTableRow } from "../types/EventsTableRow";
    import snippet from "../snippets/datepicker";
    import Code from "$lib/Code.svelte";
    let date;

    const props: PropsTableRow[] = [
        {
            props: "start",
            type: "Date",
            default: "new Date()",
        },
        {
            props: "value",
            type: "Date",
            default: "new Date()",
        },
        {
            props: "value",
            type: "Date",
            default: "new Date(2049, 11, 31)",
        },
        {
            props: "format",
            type: "'DD.MM.YYYY' | 'MM.DD.YYYY' | 'MM-DD-YYYY'",
            default: "'DD.MM.YYYY'",
        },
        {
            props: "label",
            type: "string",
            default: "''",
        },
    ]

    const events: EventsTableRow[] = [
        {
            name: 'focus',
            params: "e: CustomEvent",
            description: "Works on input focus."
        },
        {
            name: 'blur',
            params: 'e: CustomEvent',
            description: 'Works on input blur.',
        },
    ]

    $: {
        if (date){
            console.log(date)
        }
    }

</script>

<div class="date-picker-page">
    <h1>Date picker</h1>
    <h2>Default Usage</h2>
    <p>The DatePicker is a component for selecting a date between start and end. Use bind:value to get value of DatePicker</p>
    <DatePicker label="Default usage" bind:value={date} />
    <Code>{snippet.default}</Code>
    <h2>Date formats</h2>
    <p>You can use 'DD.MM.YYYY', 'MM.DD.YYYY', 'MM-DD-YYYY' date formats.</p> 
    <DatePicker label="DD.MM.YYYY" bind:value={date}/>
    <DatePicker label="MM.DD.YYYY" bind:value={date} format='MM.DD.YYYY' />
    <DatePicker label="MM-DD-YYYY" bind:value={date} format='MM-DD-YYYY' />
    <Code>{snippet.date}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>