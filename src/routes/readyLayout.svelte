<script lang="ts">
    import Code from "$lib/Code.svelte";
    import PropsTable from "$lib/docs/propsTable.svelte";
    import snippet from "../snippets/layout";
const props = [
    {
        props: "theme",
        type: "'light' | 'default' | 'dark'",
        default: "'default'"
    }
]


</script>
<div class="mlayout-page">
    <h1>MLayout</h1>
    <h2>Basic Usage</h2>
    <p>The MLayout component must be the base of your application if you want to use components such as Header, Aside, Content, Footer. The MLayout component is responsible for their proper positioning.</p>
    <Code>{snippet.default}</Code>

    <h2>Component API</h2>
    <PropsTable data={props} />
</div>
