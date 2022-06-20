<script lang="ts">
    import Button from "$lib/Button.svelte";
    import Code from "$lib/Code.svelte";
    import Modal from "$lib/Modal.svelte";
    import Table, {Column} from "$lib/Table.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import snippet from "../snippets/modal";

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
            props: "name",
            type: "string",
            default: "''",
        },
    ]

    const events = [
        {
            name: "on:close",
            params: "e: CustomEvent",
            description: "Works on modal close button click."
        }
    ]

    let isDefaultModalVisible = false
    let isFooterModalVisible = false

    const showModal = () => isDefaultModalVisible = true
    const closeModal = () => isDefaultModalVisible = false

    const showFooterModal = () => isFooterModalVisible = true
    const closeFooterModal = () => isFooterModalVisible = false

</script>

<div class="modal-page">
    <h1>Modal</h1>
    <h2>Modal default usage</h2>
    <p>Use this component to users interact with the application, without jumping to a new page and interrupting the user's workflow. You can use Modal to create a new floating layer over the current page to get user feedback or display information.</p>
    <Button on:click={showModal} >Show modal</Button>
    <Code>{snippet.default}</Code>
    <h2>Modal with footer</h2>
    <p>Use named slot footer to display content in bottom part of modal.</p>
    <Button on:click={showFooterModal} >Show modal with footer</Button>
    <Code>{snippet.footer}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
    <Table columns={columnsEvents} data={events} />
    {#if isDefaultModalVisible}
        <Modal name='Example modal' on:close={closeModal}>
            <div slot="body">
                <p>Content</p>
            </div>
        </Modal>
    {/if}
    {#if isFooterModalVisible}
        <Modal name='Example modal' on:close={closeFooterModal}>
            <div slot="body">
                <p>Content</p>
            </div>
            <div slot="footer">
                <Button type='primary' on:click={closeFooterModal}>Yes</Button>
                <Button on:click={closeFooterModal}>No</Button>
            </div>
        </Modal>
    {/if}
</div>