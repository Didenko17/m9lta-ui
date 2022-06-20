export default {
    default: `
    <script>
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
    </script>
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
    `,
    tabType: `
    {
        name: string,
        key: string,
    }
    `
}