export default {
    slot: `
    <script>
        let images = [ catPhoto, dogPhoto, cowPhoto ]
    </script>
    <Carousel {images} >
        <p>
            1. Pixabay
        </p>
        <br>
        <p>
            2. Gillian Harrison
        </p>
        <br>
        <p>
            3. Viktor Lundberg
        </p>
    </Carousel>
    `,
    scale: `
    <script>
        let images = [ catPhoto, dogPhoto, cowPhoto ]
    </script>
    <Col>
        <Carousel {images} scale='4x3' />
    </Col>
    <Col>
        <Carousel {images} width={300} scale='3x3' />
    </Col>
    <Col>
        <Carousel {images}/>
    </Col>
    `
}