<script lang="ts">
    import TabPage from "$lib/TabPage.svelte";
import Tabs from "$lib/Tabs.svelte";
</script>

<div class="tabs-page">
    <Tabs let:current tabs={[
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
    ]}>
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
</div>
