<script lang="ts">
    export let width: number = null;

    let el;

    $: {
        if(el && !width) {
            const colWidth = Math.ceil(el.clientWidth *12 / (el.parentNode.clientWidth - 20));
            width = colWidth > 12 ? 12 : colWidth
        }
    }

</script>

<div bind:this={el} class={ 'col col-' + width }>
    <slot></slot>
</div>

<style>
.col {
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.col-1 {
    width: calc(100%/12);
}
.col-2 {
    width: calc(100%/6);
}
.col-3 {
    width: 25%;
}
.col-4 {
    width: calc(100%/3);
}
.col-5 {
    width: calc(100%/12*5) ;
}
.col-6 {
    width: 50%;
}
.col-7 {
    width: calc(100%/12*7);
}
.col-8 {
    width: 75%;
}
.col-9 {
    width: calc(100%/4*3);
}
.col-10 {
    width: calc(100%/6*5);
}
.col-11 {
    width: calc(100%/12*11);
}
.col-12 {
    width: 100%;
}
</style>