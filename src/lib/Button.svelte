<script lang="ts">
    export let circle = false;
    export let outline = false;
    export let text = false
    export let type: 'default' | 'primary' | 'black' = 'default';
    export let nomargin = false
</script>

<button
    class={"button button-"+ type }
    class:circle
    class:outline
    class:text
    class:nomargin
    on:click
>
    <slot />
</button>

<style>
    .button {
        margin: 10px;
        padding: 5px 7px;
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

    .button.outline {
        background-color: transparent;
    }

    .button-default {
        color: #454545;
        border: 1px solid #cacaca;
        background-color: #fafafa;;
    }
    .button-default.outline {
        border: 1px solid #cacaca;
    }
    .button-primary {
        background-color: #1674E0;
        border: 1px solid #1674E0;
		color: #fff;
    }
    .button-primary.outline {
        color: #1674E0;
        border: 1px solid #1674E0;
    }
    .button-black {
        background-color: #000;
        border: 1px solid #000;
		color: #fff;
    }
    .button-black.outline {
        color: #000;
        border: 1px solid #000;
    }

    .button.text {
        background: transparent;
        border: none;
        color: #666;
    }

    .button.text:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .button-primary.text {
        color: #1674E0;
    }

    .button.nomargin {
        margin: 0 3px;
    }

</style>