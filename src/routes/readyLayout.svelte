<script lang="ts">
    import Aside from "$lib/Aside.svelte";
    import Code from "$lib/Code.svelte";
    import Content from "$lib/Content.svelte";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import MLayout from "$lib/MLayout.svelte";
    import PropsTable from "../components/propsTable.svelte";
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
