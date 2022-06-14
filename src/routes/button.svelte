<script lang="ts">
    import Button from "$lib/Button.svelte";
    import Table, {Column} from "$lib/Table.svelte";
    function onClick (e) {
		console.log('Button clicked');
	}

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
            props: "circle",
            type: "boolean",
            default: "false",
        },
        {
            props: "outline",
            type: "boolean",
            default: "false",
        },
        {
            props: "text",
            type: "boolean",
            default: "false",
        },
        {
            props: "type",
            type: "'default' | 'primary' | 'black'",
            default: 'default',
        },
        {
            props: "nomargin",
            type: "boolean",
            default: "false",
        },
    ]

    const events = [
        {
            name: "on:click",
            params: "e: MouseEvent",
            description: "Works on component click"
        }
    ]

</script>

<div class="button-page">
    <h1>Button</h1>
    <h2>Button</h2>
    <Button on:click={(e) => onClick(e)} >Button</Button>
    <Button on:click={onClick} type="primary">Button</Button>
    <Button on:click={onClick} type="black">Button</Button>
    <Button on:click={onClick} type="primary" outline circle>Button</Button>
    <Button on:click={onClick} outline>Button</Button>
    <Button on:click={onClick} type="primary" outline>Button</Button>

    <h2>Component API</h2>
    <Table columns={columnsProps} data={props} />
    <Table columns={columnsEvents} data={events} />
</div>