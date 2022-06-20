<script lang="ts">
    import Carousel from "$lib/Carousel.svelte";
    import catPhoto from "../img/carousel-photos/cat.jpg";
    import dogPhoto from "../img/carousel-photos/dog.jpg";
    import cowPhoto from "../img/carousel-photos/cow.jpg";
    import PropsTable from "../components/propsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import Row from "$lib/Row.svelte";
    import Col from "$lib/Col.svelte";
    import snippet from "../snippets/carousel"
import Code from "$lib/Code.svelte";

    let images = [ catPhoto, dogPhoto, cowPhoto ]

    const props: PropsTableRow[]= [
        {
            props: "images",
            type: "string[ ]",
            default: "[ ]",
        },
        {
            props: "width",
            type: "number",
            default: "400",
        },
        {
            props: "scale",
            type: "'3x3' | '4x3' | '16x9'",
            default: "'16x9'",
        },
    ]


</script>

<div class="carousel-page">
    <h1>Carousel</h1>
    <h2>Default usage</h2>
    <Carousel {images} >
        <p>
            1. Pixabay: https://www.pexels.com/ru-ru/photo/45201/
        </p>
        <br>
        <p>
            2. Gillian Harrison: https://www.pexels.com/ru-ru/photo/4668425/
        </p>
        <br>
        <p>
            3. Viktor Lundberg: https://www.pexels.com/ru-ru/photo/755025/
        </p>
    </Carousel>
    <Code>{snippet.slot}</Code>
    <h2>Carousel scale</h2>
    <Row>
        <Col>
            <Carousel {images} scale='4x3' />
        </Col>
        <Col>
            <Carousel {images} width={300} scale='3x3' />
        </Col>
        <Col>
            <Carousel {images}/>
        </Col>
    </Row>
    <Code>{snippet.scale}</Code>
    <h2>Component API</h2>
    <PropsTable data={props} />
</div>