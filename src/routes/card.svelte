<script lang="ts">
    import Card from "$lib/Card.svelte";
    import dogImg from "../img/dog.jpg";
    import PropsTable from "$lib/docs/PropsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import snippet from "../snippets/card"
import Code from "$lib/Code.svelte";

    const props:PropsTableRow[] = [
        {
            props: "size",
            type: "'small'| 'default' | 'large' | 'responsive'",
            default: "'default'",
        },
        {
            props: "backgroundImage",
            type: "string",
            default: "''",
        }
    ]

</script>

<div class="card-page">
    <h1>Card</h1>
    <h2>Card default usage</h2>
    <p>Use Card to display some content as a card.</p>
    <Card>
        Some text
    </Card>
    <Code>{snippet.default}</Code>
    <h2>Responsive card</h2>
    <p>Use props size='responsive' to make it responsive.</p>
    <Card size='responsive'>
        Some text
    </Card>
    <Code>{snippet.responsive}</Code>
    <h2>Card background-image</h2>
    <p>Use props backgroundImage if you want to set a image as the background.</p>
    <Card size='small' backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Card backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Card size='large' backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Code>{snippet.backgroundImage}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>
