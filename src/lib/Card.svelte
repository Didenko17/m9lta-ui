<script lang="ts">
    export let size: 'small'| 'default' | 'large' | 'responsive' = 'default'
    export let backgroundImage = ''
</script>

<div on:click class={ 'card ' + size } style:background={ backgroundImage ? `center / cover no-repeat url(${backgroundImage})` : '' } >
    <div class="description">
        <slot />
    </div>
</div>

<style>
.card {
    margin: 10px;
    box-sizing: border-box;
    border: 1px solid #cacaca;
    border-radius: 3px;
    overflow: hidden;
    color: #454545;
    cursor: pointer;
}

.card:hover {
    border-color: #1674E0;
}

.card.small {
    height: 100px;
    width: 80px;
    color: transparent;
}

.card.small .description {
    height: 100px;
    width: 80px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 10px;
}

.card.small:hover .description {
    background-color: rgba(0,0,0,0.5);
    color: #fff;
}

.card.default {
    height: 250px;
    width: 200px;
}

.card.large {
    height: 320px;
    width: 400px;
}

.card.responsive {
    width: max-content;
}

.card.responsive .description{
    width: max-content;
}

.description {
    padding: 10px;
}

</style>