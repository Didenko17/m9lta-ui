<script lang="ts">
    export let circle = false;
    export let outline = false;
    export let type = "default";
</script>

<button
    class={"button button-"+ type }
    class:circle
    class:outline
    on:click
>
    <slot />
</button>

<style>
    .button {
        margin: 20px;
        padding: 7px 10px;
        border-radius: 3px;
        border: 1px solid #cacaca;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .circle {
        width: 75px;
        height: 75px;
        border-radius: 50%;
    }
    .button-default {
        color: #454545;
        border: 1px solid #cacaca;
        background-color: #fafafa;;
    }
    .button-default.outline {
        background-color: transparent;
        border: 1px solid #cacaca;
    }
    .button-primary {
        background-color: #1674E0;
        border: 1px solid #1674E0;
		color: #fff;
    }
    .button-primary.outline {
        background-color: transparent;
        color: #1674E0;
        border: 1px solid #1674E0;
    }
    .button-black {
        background-color: #000;
        border: 1px solid #000;
		color: #fff;
    }
    .button-black.outline {
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
    }
</style>