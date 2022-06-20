<script lang="ts">
    import Statistic from "$lib/Statistic.svelte";
    import PropsTable from "../components/propsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import starIcon from '../img/star.svg';
    import snippet from "../snippets/statistic"
import Code from "$lib/Code.svelte";

    const props: PropsTableRow[] = [
        {
            props: "value",
            type: "string",
            default: "''",
        },
        {
            props: "units",
            type: "string",
            default: "'%'",
        },
        {
            props: "name",
            type: "string",
            default: "''",
        },
        {
            props: "icon",
            type: "string",
            default: "''",
        },
    ]

</script>

<div class="statistic-page">
    <h1>Statistic</h1>
    <h2>Statistic default usage</h2>    
    <p>You can use this component when you want to display statistic. Use name props to set custom name of Statistic.</p>
    <Statistic name='percentage' value="42" />
    <Code>{snippet.default}</Code>
    <h2>Statistic units</h2>    
    <p>Use the units props to set custom units of measure. It takes a string type.</p>
    <Statistic name='speed' units='km / h' value="42" />
    <Code>{snippet.units}</Code>
    <h2>Statistic icon</h2>    
    <p>If you want to switch icon use icon props.</p>
    <Statistic name='stars with units' icon={starIcon} value="42" units='stars' />
    <Statistic name='stars' icon={starIcon} value="42" units='' />
    <Code>{snippet.icons}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>