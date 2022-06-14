<script lang="ts">
    import hljs from "highlight.js"
    import 'highlight.js/styles/github.css';
    import Button from "./Button.svelte";
    let el;
    $: {
        if (el && el.innerHTML) {
            hljs.highlightElement(el)
        }
    }

    const copyCode = () => {
        console.log("copied")
    }

</script>
<div class="code">
    <div class="copy">
        <Button nomargin text on:click={copyCode}>
            Copy
        </Button>
    </div>
    <pre class="prettyprint"><code bind:this={el}>
        <slot/>
    </code></pre>
</div>

<style>
    .code {
        border: 1px solid #cacaca;
        width: max-content;
        min-width: 500px;
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
    .copy {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>