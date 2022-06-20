<script lang="ts">
    import Row from "$lib/Row.svelte";
    import Col from "$lib/Col.svelte";
    import Example from "$lib/docs/Example.svelte";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from "../snippets/grid"
import Code from "$lib/Code.svelte";

    const colProps: PropsTableRow[] = [
        {
            props: "width",
            type: "number",
            default: "null"
        }
    ]

</script>

<div class="grid-page">
    <h1>Row/Column</h1>
    <h2>Default usage</h2>
    <p>Sometimes you may need a grid in the application. You can use the Row and Column components for this.</p>
    <Example width="80%" height="max-content" >
        <Row>
            <Col width={4}>
                <div class="col">
                    col-4
                </div>
            </Col>
            <Col width={4}>
                <div class="col">
                    col-4
                </div>
            </Col>
            <Col width={4}>
                <div class="col">
                    col-4
                </div>
            </Col>
        </Row>
        <Row>
            <Col width={3}>
                <div class="col">
                    col-3
                </div>
            </Col>
            <Col width={3}>
                <div class="col">
                    col-3
                </div>
            </Col>
            <Col width={6}>
                <div class="col">
                    col-6
                </div>
            </Col>
        </Row>
        <Row>
            <Col width={12}>
                <div class="col">
                    col-12
                </div>
            </Col>
        </Row>
    </Example>
    <Code>{snippet.default}</Code>
    <h2>Col API</h2>
    <PropsTable data={colProps} />

</div>

<style>
.col {
    background-color: #cacaca;
    border: #666;
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>