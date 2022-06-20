<script lang="ts">
import Progress from "$lib/Progress.svelte";
import PropsTable from "../components/propsTable.svelte";
import type { PropsTableRow } from "src/types/PropsTableRow";
import snippet from "../snippets/progress"
import Code from "$lib/Code.svelte";

const props: PropsTableRow[] = [
    {
        props: "value",
        type: "number",
        default: "0",
    },
    {
        props: "max",
        type: "number",
        default: "100",
    }
]


</script>

<div class="progress-page">
    <h1>Progress</h1>
    <Progress value={0} />
    <Progress value={25} />
    <Progress value={50} />
    <Progress value={75} />
    <Progress value={100} />
    <Code>{snippet.default}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>