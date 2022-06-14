<script lang="ts">
    import Card from "$lib/Card.svelte";
    import dogImg from "../img/dog.jpg";

    const onClick = () => {
        console.log('Card clicked')
    } 

</script>

<div class="card-page">
    <h2>Card</h2>
    <h3>Card default usage</h3>
    <Card on:click={onClick}>
        Some text
    </Card>
    <h3>Card sizing</h3>
    <Card on:click={onClick} size='small'>
        Some text
    </Card>
    <Card on:click={onClick}>
        Some text
    </Card>
    <Card on:click={onClick} size='large'>
        Some text
    </Card>
    <Card on:click={onClick} size='responsive'>
        Some text Some text Some text Some text Some text
    </Card>
    <h3>Card background-image</h3>
    <Card on:click={onClick} size='small' backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Card on:click={onClick} backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
    <Card on:click={onClick} size='large' backgroundImage={dogImg}>
        Photo by kira schwarz
    </Card>
</div>
