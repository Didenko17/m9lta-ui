<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Footer from "$lib/Footer.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import Example from "$lib/docs/Example.svelte";
    import snippet from "../snippets/footer"
    const props: PropsTableRow[] = [
        {
            props: "theme",
            type: "'light' | 'default' | 'dark'",
            default: "'default'"
        },
        {
            props: "flex",
            type: "'center' | 'space-between' | 'flex-start'",
            default: "'center'",
        }
    ]
    
    
    </script>
<div class="Footer-page">
    <h2>Footer</h2>
    <p>Footer can be used to display contacts in your application. It can also contain any other elements. Footer has the following props: flex, theme.</p>
    
    <h3>Basic Usage</h3>

    <Example>
        <Footer>Footer</Footer>
    </Example>
    
    <Code>{snippet.default}</Code>

    <h3>Flex props</h3>

    <Example>
        <Footer flex="center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Footer>
    </Example>
    <Example>
        <Footer flex="space-between">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Footer>
    </Example>
    <Example>
        <Footer flex="flex-start">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Footer>
    </Example>
    
    <Code>{snippet.flex}</Code>

    <h3>Theme props</h3>

    <Example>
        <Footer theme="dark">
            <div>Dark</div>
        </Footer>
    </Example>
    <Example>
        <Footer theme="default">
            <div>Default</div>
        </Footer>
    </Example>
    <Example>
        <Footer theme="light">
            <div>Light</div>
        </Footer>
    </Example>
    
    <Code>{snippet.theme}</Code>

    <h3>Component API</h3>
    <PropsTable data={props} />

</div>
