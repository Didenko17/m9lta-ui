<script lang='ts'>
import Button from "$lib/Button.svelte";
import PopConfirm from "$lib/PopConfirm.svelte";
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
            props: "text",
            type: "string",
            default: "''",
        },
    ]

    const events = [
        {
            name: "on:cancel",
            params: "e: CustomEvent",
            description: "Works on modal cancel button click."
        },
        {
            name: "on:ok",
            params: "e: CustomEvent",
            description: "Works on modal ok button click."
        }
    ]

    
</script>

<div class="popconfirm-page">
    <h1>PopConfirm</h1>
    <h2>PopConfirm default usage</h2>
    <p>You can use the PopConfirm component to confirm some actions by the user, such as deletion.</p>
    <PopConfirm
        text="Are you sure to delete this user?"
        on:ok={() => console.log('ok')}
        on:cancel={() => console.log('cancel')}
    >
        <Button>Delete</Button>
    </PopConfirm>
    <h2>Component API</h2>
    <Table columns={columnsProps} data={props} />
    <Table columns={columnsEvents} data={events} />
</div>