<script lang="ts">
import Code from "$lib/Code.svelte";

    import Tag from "$lib/Tag.svelte";
    import snippet from "../snippets/import";

</script>
<div class="home">
    <h1>Getting started</h1>
    <h2>m9lta-ui is a component library for Svelte. To start using it:</h2>
    <h3>1) Create Svelte App</h3>
    <h3>2) Read docs</h3>
    <h3>3) Run <Tag>npm i m9lta-ui</Tag></h3>
    <h3>4) Import component and use it</h3>
    <h2>Component import</h2>
    <p>To use a component, copy the code below and replace componentName with the name of the component you want to use.</p>
    <Code>{snippet.default}</Code>
</div>