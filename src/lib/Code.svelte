<script lang="ts">
    
    import hljs from "highlight.js"
    import 'highlight.js/styles/github.css';
    import Button from "./Button.svelte";
    let el;

    export let nocopy = false;

    $: {
        if (el && el.innerHTML) {
            hljs.highlightElement(el)
        }
    }

    const copyCode = () => {
        if (el && el.innerText) {
            navigator.clipboard.writeText(el.innerText);
        }
    }

</script>
<div class="code-wrapper">
    {#if !nocopy}
    <div class="copy">
        <Button nomargin text on:click={copyCode}>
            Copy
        </Button>
    </div>
    {/if}
    <div class="code">
        <pre class="prettyprint">
            <code bind:this={el}>
                <slot/>
            </code>
        </pre>
    </div>
</div>

<style>
    .code-wrapper {
        border: 1px solid #cacaca;
        width: max-content;
        min-width: 500px;
        margin: 10px;
        box-sizing: border-box;
        position: relative;
    }
    .copy {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    pre {
        height: max-content;
    }
    .code code {
        padding: 0;
        margin: 0;
        height: max-content;
    }
</style>