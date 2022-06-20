export default {
    default: `
    <PopConfirm
        text="Are you sure to delete this user?"
        on:ok={okFunction}
        on:cancel={cancelFunction}
    >
        <Button>Delete</Button>
    </PopConfirm>
    `
}