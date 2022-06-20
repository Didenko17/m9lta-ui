export default {
    default: `
    <script>
        let value = true;
    </script>
    <Toggle bind:value={value} />
    `,
    text: `
    <script>
        let value = false;
    </script>
    <Toggle
        offText="Close"
        onText="Open"
        bind:value={value}
    />
    `
}