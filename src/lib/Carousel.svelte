<script lang="ts">

    export let images: string[] = []
    export let width: number = 400;
    export let scale: '3x3' | '4x3' | '16x9' = '16x9'

    let height = 0;
    let currentImage = '';
    let currentIndex= 0;

    let justifyContent = 'space-between'

    $: {
        const [ scaleWidth, scaleHeight ] = scale.split('x');
        height = width / +scaleWidth * +scaleHeight;
    }

    $: {
        currentImage = images[currentIndex]
    }

    $: {
        if (currentIndex === images.length - 1) {
            justifyContent = 'flex-start'
        } else if (!currentIndex) {
            justifyContent = 'flex-end'
        } else {
            justifyContent = 'space-between'
        }
    }

    const prevPhoto = () => {
        currentIndex--;
    }

    const nextPhoto = () => {
        currentIndex++;
    }

</script>
<div class="carousel" style:width={ width + 'px' }>

    <div
        class="carousel-photo"
        style:height={ height + 'px' }
        style:background={ `center / contain no-repeat url('${currentImage}')` }
        style:justify-content={ justifyContent }
    >
        <div
            class="arrow-left"
            class:hidden={!currentIndex}
            on:click={prevPhoto}
        ></div>
        <div
            class="arrow-right"
            class:hidden={currentIndex === images.length - 1}
            on:click={nextPhoto}
        ></div>
        <div class="carousel-value">
            {#each images as _, index (index) }
                <div class="carousel-point" class:active={ index === currentIndex } on:click={() => currentIndex = index} ></div>
            {/each}
        </div>
    </div>

    {#if $$slots.default}
        <div class="carousel-description">
            <slot />
        </div>
    {/if}

</div>

<style>
.carousel {
    margin: 10px;
    background-color: #fafafa;
    border: 1px solid #cacaca;
    border-radius: 3px;
}

.carousel-photo {
    width: 100%;
    display: flex;
    position: relative;
}

.carousel-photo .arrow-left, .carousel-photo .arrow-right {
    height: 100%;
    width: 32px;
    cursor: pointer;
}

.carousel-photo .arrow-left {
    margin-left: 20px;
    background: center / contain no-repeat url('./icons/carousel-arrow-left.svg');
}

.carousel-photo .arrow-left:hover {
    background: center / contain no-repeat url('./icons/carousel-arrow-left-hover.svg');
}

.carousel-photo .arrow-right {
    margin-right: 20px;
    background: center / contain no-repeat url('./icons/carousel-arrow-right.svg');
}

.carousel-photo .arrow-right:hover {
    background: center / contain no-repeat url('./icons/carousel-arrow-right-hover.svg');
}

.carousel-photo .carousel-value {
    width: max-content;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(190, 190, 190, 0.5);
    border-radius: 10px;
    padding: 5px;
}
.carousel-point {
    height: 8px;
    width: 8px;
    margin: 0 3px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
}

.carousel-point.active {
    background-color: rgba(22, 116, 224, 0.8);
}

.hidden {
    display: none;
}

.carousel-description {
    margin: 30px 20px;
}


</style>