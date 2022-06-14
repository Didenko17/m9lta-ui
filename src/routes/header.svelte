<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Header from "$lib/Header.svelte";
    import Table, { Column } from "$lib/Table.svelte";
    
    const columns: Column[] = [
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
    
    const data = [
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
        <h2>Header</h2>
        <p>The Header can be used to display your application's logo, or for top navigation. It can also contain any other elements, such as a log out button. The header has the following props: flex, theme.</p>
        
        <h3>Basic Usage</h3>
    
        <div class="example">
            <Header>header</Header>
        </div>
        
        <Code>
            &lt;MLayout&gt;
                &lt;Header&gt;...
                &lt;/Header&gt;
            &lt;MLayout&gt;
        </Code>

        <h3>Flex props</h3>
    
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
            &lt;MLayout&gt;
                &lt;Header&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Header flex="space-between"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Header flex="flex-start"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
        </Code>

        <h3>Theme props</h3>
    
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
            &lt;MLayout&gt;
                &lt;Header theme="dark"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Header&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Header theme="light"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Header&gt;
            &lt;MLayout&gt;
        </Code>
    
        <h3>Component API</h3>
        <Table {columns} {data} />
    
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
