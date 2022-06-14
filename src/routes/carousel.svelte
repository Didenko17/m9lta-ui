<script lang="ts">
    import Carousel from "$lib/Carousel.svelte";
    import catPhoto from "../img/carousel-photos/cat.jpg";
    import dogPhoto from "../img/carousel-photos/dog.jpg";
    import cowPhoto from "../img/carousel-photos/cow.jpg";

    let images = [ catPhoto, dogPhoto, cowPhoto ]


</script>

<div class="carousel-page">
    <h2>Carousel</h2>
    <h3>Carousel scale</h3>
    <Carousel {images} >
        <p>
            1. Фотограф: Pixabay: https://www.pexels.com/ru-ru/photo/45201/
        </p>
        <br>
        <p>
            2. Фотограф: Gillian Harrison: https://www.pexels.com/ru-ru/photo/4668425/
        </p>
        <br>
        <p>
            3. Фотограф: Viktor Lundberg: https://www.pexels.com/ru-ru/photo/755025/
        </p>
    </Carousel>
    <Carousel {images} scale='4x3' />
    <Carousel {images} scale='3x3' />
</div>