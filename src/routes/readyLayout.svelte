<script lang="ts">
import Aside from "$lib/Aside.svelte";
import Code from "$lib/Code.svelte";
import Content from "$lib/Content.svelte";
import Footer from "$lib/Footer.svelte";
import Header from "$lib/Header.svelte";
import MLayout from "$lib/MLayout.svelte";
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
    }
]


</script>
<div class="mlayout-page">
    <h2>MLayout</h2>
    <p>The MLayout component must be the base of your application if you want to use components such as Header, Aside, Content, Footer. The MLayout component is responsible for their proper positioning.</p>
    
    <h3>Basic Usage</h3>

    <div class="example">
        <MLayout>
            <Header />
            <Aside />
            <Content />
            <Footer />
        </MLayout>
    </div>
    
    <Code>
        &lt;MLayout&gt;
            &lt;Header&gt;...
            &lt;/Header&gt;
            &lt;Aside&gt;...
            &lt;/Aside&gt;
            &lt;Content&gt;...
            &lt;/Content&gt;
            &lt;Footer&gt;...
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
        overflow-y: auto;
    }
</style>