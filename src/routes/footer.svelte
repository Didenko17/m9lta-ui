<script lang="ts">
    import Code from "$lib/Code.svelte";
    import Footer from "$lib/Footer.svelte";
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
    <div class="Footer-page">
        <h2>Footer</h2>
        <p>Footer can be used to display contacts in your application. It can also contain any other elements. Footer has the following props: flex, theme.</p>
        
        <h3>Basic Usage</h3>
    
        <div class="example">
            <Footer>Footer</Footer>
        </div>
        
        <Code>
            &lt;MLayout&gt;
                &lt;Footer&gt;...
                &lt;/Footer&gt;
            &lt;MLayout&gt;
        </Code>

        <h3>Flex props</h3>
    
        <div class="example">
            <Footer flex="center">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Footer>
        </div>
        <div class="example">
            <Footer flex="space-between">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Footer>
        </div>
        <div class="example">
            <Footer flex="flex-start">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Footer>
        </div>
        
        <Code>
            &lt;MLayout&gt;
                &lt;Footer&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Footer flex="space-between"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Footer flex="flex-start"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
            &lt;MLayout&gt;
        </Code>

        <h3>Theme props</h3>
    
        <div class="example">
            <Footer theme="dark">
                <div>Dark</div>
            </Footer>
        </div>
        <div class="example">
            <Footer theme="default">
                <div>Default</div>
            </Footer>
        </div>
        <div class="example">
            <Footer theme="light">
                <div>Light</div>
            </Footer>
        </div>
        
        <Code>
            &lt;MLayout&gt;
                &lt;Footer theme="dark"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Footer&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
            &lt;MLayout&gt;
            &lt;MLayout&gt;
                &lt;Footer theme="light"&gt;
                    &lt;div&gt;1&lt;/div&gt;
                    &lt;div&gt;2&lt;/div&gt;
                    &lt;div&gt;3&lt;/div&gt;
                &lt;/Footer&gt;
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
            align-items: flex-end;
            overflow-y: auto;
        }
    </style>
