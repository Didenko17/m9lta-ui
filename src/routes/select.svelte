<script lang="ts">
    import Select from "$lib/Select.svelte";
    import Table, {Column} from "$lib/Table.svelte";


    const columnsProps: Column[] = [
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

    const columnsEvents: Column[] = [
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

    const props= [
        {
            props: "id",
            type: "string",
            default: "''",
        },
        {
            props: "multiple",
            type: "boolean",
            default: "false",
        },
        {
            props: "placeholder",
            type: "string",
            default: "'Select value'",
        },
        {
            props: "defaultValue",
            type: "string[ ]",
            default: '[ ]',
        },
        {
            props: "options",
            type: "{ name: string, value: string, disabled?: boolean }[ ]",
            default: "[ ]",
        },
    ]

    const events = [
        {
            name: "on:change",
            params: "e: CustomEvent",
            description: "Works on select value change."
        }
    ]

    const onChange = (e) => {
        console.log(e.detail.target)
    }
</script>

<div class="select-page">
    <h1>Select</h1>
    <h2>Select default usage</h2>
    <p>Select is used to select one or more values from a drop-down list.</p>
    <Select
        on:change={(e) => onChange(e)}
        id="first-select"
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3'}]} 
    />
    <h2>Select multiple</h2>
    <p>Use props multiple to select multiple values.</p>
    <Select
        defaultValue={["3"]}
        id="second-select"
        multiple
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3'}]}
    />
    <h2>Select disabled</h2>
    <p>Use option field disabled to disable option.</p>
    <Select
        defaultValue={["2"]}
        id="third-select"
        options={[{name: '1', value: '1'}, {name: 'two', value: '2'},{name: 'third', value: '3', disabled: true}]}
    />
    <h2>Component API</h2>
    <Table columns={columnsProps} data={props}/>
    <Table columns={columnsEvents} data={events}/>
</div>