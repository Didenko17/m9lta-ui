export default {
    default:`
            <MLayout>
                <Header>...
                </Header>
            </MLayout>
            `,
    flex: `<MLayout>
                <Header>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            <MLayout>
            <MLayout>
                <Header flex="space-between">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            <MLayout>
            <MLayout>
                <Header flex="flex-start">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            <MLayout>`,
    theme: `<MLayout>
                <Header theme="dark">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            </MLayout>
            <MLayout>
                <Header>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            </MLayout>
            <MLayout>
                <Header theme="light">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Header>
            </MLayout>`,
}