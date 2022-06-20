export default {
    default:`
            <MLayout>
                <Footer>...
                </Footer>
            </MLayout>
            `,
    flex: `<MLayout>
                <Footer>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Footer>
            <MLayout>
            <MLayout>
                <Footer flex="space-between">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Footer>
            <MLayout>
            <MLayout>
                <Footer flex="flex-start">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Footer>
            <MLayout>`,
    theme: `<MLayout>
                <Footer theme="dark">
                    <div>Dark</div>
                </Footer>
            </MLayout>
            <MLayout>
                <Footer>
                    <div>Default</div>
                </Footer>
            </MLayout>
            <MLayout>
                <Footer theme="light">
                    <div>Light</div>
                </Footer>
            </MLayout>`,
}