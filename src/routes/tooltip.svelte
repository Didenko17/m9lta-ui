<script lang="ts">
    import Col from "$lib/Col.svelte";
    import Row from "$lib/Row.svelte";
    import Tag from "$lib/Tag.svelte";
    import Tooltip from "$lib/Tooltip.svelte";
    import PropsTable from "$lib/docs/propsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from "../snippets/tooltip"
import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "tooltipText",
            type: "string",
            default: "''",
        },
        {
            props: "position",
            type: "'top' | 'right' | 'bottom' | 'left'",
            default: "'top'",
        }
    ]
</script>

<div class="tooltip-page">
    <h1>Tooltip</h1>
    <h2>Tooltip default usage</h2>
    <p>The tip is shown on mouse enter, and is hidden on mouse leave.</p>
    <Row>
        <Col width={3}>
            <div class="example">
                <Tooltip position='top' tooltipText="top">
                    <Tag>top</Tag>
                </Tooltip>
            </div>
        </Col>
        <Col width={3}>
            <div class="example">
                <Tooltip position='right' tooltipText="right">
                    <Tag>right</Tag>
                </Tooltip>
            </div>
        </Col>
        <Col width={3}>
            <div class="example">
                <Tooltip position='left' tooltipText="left">
                    <Tag>left</Tag>
                </Tooltip>
            </div>
        </Col>
        <Col width={3}>
            <div class="example">
                <Tooltip position='bottom' tooltipText="bottom">
                    <Tag>bottom</Tag>
                </Tooltip>
            </div>
        </Col>
    </Row>
    <Code>{snippet.default}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>

<style>
    .example {
        height: 150px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>