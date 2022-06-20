<script lang="ts">
    import Button from "$lib/Button.svelte";
    import Code from "$lib/Code.svelte";
    import EventsTable from "$lib/docs/EventsTable.svelte";
    import PropsTable from "$lib/docs/propsTable.svelte";
    import snippet from "../snippets/button"
    function onClick (e) {
		console.log('Button clicked');
	}

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
    <h2>Default usage</h2>
    <Button on:click={(e) => onClick(e)} >Button</Button>
    <Button on:click={onClick} type="primary">Button</Button>
    <Button on:click={onClick} type="black">Button</Button>
    <Code>{snippet.default}</Code>
    <h2>Outline button</h2>
    <Button on:click={onClick} type="primary" outline>Button</Button>
    <Button on:click={onClick} outline>Button</Button>
    <Button on:click={onClick} type="primary" outline>Button</Button>
    <Code>{snippet.outline}</Code>
    <h2>Circle button</h2>
    <p>Use props circle to make Button rounded.</p>
    <Button circle >Click</Button>
    <Button circle type="primary" outline >Click</Button>
    <Button circle type="black" >Click</Button>
    <Code>{snippet.circle}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <EventsTable data={events} />
</div>