<script lang="ts">
    export let width: Number = 0;
</script>

<div class={ 'col col-' + width }>
    <slot></slot>
</div>

<style>
.col {
    padding: 5px;
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