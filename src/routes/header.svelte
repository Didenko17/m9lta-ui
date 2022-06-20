<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Header from "$lib/Header.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from '../snippets/header';
    
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
    <div class="header-page">
        <h1>Header</h1>
        <p>The Header can be used to display your application's logo, or for top navigation. It can also contain any other elements, such as a log out button. The header has the following props: flex, theme.</p>
        
        <h2>Basic Usage</h2>
    
        <div class="example">
            <Header>header</Header>
        </div>
        
        <Code>
            {snippet.default}
        </Code>

        <h2>Flex props</h2>
    
        <div class="example">
            <Header flex="center">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Header>
        </div>
        <div class="example">
            <Header flex="space-between">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Header>
        </div>
        <div class="example">
            <Header flex="flex-start">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Header>
        </div>
        
        <Code>
            {snippet.flex}
        </Code>

        <h2>Theme props</h2>
    
        <div class="example">
            <Header theme="dark">
                <div>Dark</div>
            </Header>
        </div>
        <div class="example">
            <Header theme="default">
                <div>Default</div>
            </Header>
        </div>
        <div class="example">
            <Header theme="light">
                <div>Light</div>
            </Header>
        </div>
        
        <Code>
            {snippet.theme}
        </Code>
    
        <h2>Component API</h2>
        <PropsTable data={props} />
    
    </div>
    
    <style>
        .example {
            width: 320px;
            height: 240px;
            margin: 10px;
            border: 1px solid #cacaca;
            display: inline-flex;
            overflow-y: auto;
        }
    </style>
