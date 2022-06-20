export default {
    default: `
    <Button on:click={showModal} >Show modal</Button>
    {#if modalVisible}
        <Modal name='Example modal' on:close={closeModal}>
            <div slot="body">
                <p>Content</p>
            </div>
        </Modal>
    {/if}
    `,
    footer: `
    <Button on:click={showModal} >Show modal</Button>
    {#if modalVisible}
        <Modal name='Example modal' on:close={closeModal}>
            <div slot="body">
                <p>Content</p>
            </div>
            <div slot="footer">
                <Button type='primary>Yes</Button>
                <Button>No</Button>
            </div>
        </Modal>
    {/if}
    `
}