<script lang="ts">
    import TabPage, { Tab } from "$lib/TabPage.svelte";
    import Tabs from "$lib/Tabs.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from "../snippets/tab"
import Code from "$lib/Code.svelte";

    const tabs: Tab[] = [
        {
            name: 'Tab 1',
            key: 'tab1'
        },
        {
            name: 'Tab 2',
            key: 'tab2'
        },
        {
            name: 'Tab 3',
            key: 'tab3'
        },
    ]

    const tabsProps: PropsTableRow[] = [
        {
            props: "width",
            type: "string",
            default: "500px",
        },
        {
            props: "height",
            type: "string",
            default: "300px",
        },
        {
            props: "tabs",
            type: "Tab[ ]",
            default: "[ ]",
        },
    ]

    const tabPageProps: PropsTableRow[] = [
        {
            props: "key",
            type: "string",
            default: "''",
        },
        {
            props: "current",
            type: "Tab",
            default: "null",
        },
    ]

</script>

<div class="tabs-page">
    <h1>Tabs</h1>
    <h2>Default usage</h2>
    <p>Use props width and height to set the width and height of Tabs. You can use any string that CSS recognizes (px, %, vh, vw, etc.).</p>
    <Tabs let:current {tabs}>
        <TabPage {current} key='tab1'>
            Tab 1
        </TabPage>
        <TabPage {current} key='tab2'>
            Tab 2
        </TabPage>
        <TabPage {current} key='tab3'>
            Tab 3
        </TabPage>
    </Tabs>
    <Code>{snippet.default}</Code>
    <h2>Tabs API</h2>
    <PropsTable data={tabsProps} />
    <PropsTable data={tabPageProps} />
    <h2>Tab type</h2>
    <Code nocopy>{snippet.tabType}</Code>
</div>
