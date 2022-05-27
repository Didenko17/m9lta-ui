<script lang="ts">
    import Button from "$lib/Button.svelte";
    function onClick (e) {
		console.log('Button clicked');
	}
</script>

<div class="button-page">
    <h1>Button</h1>
    <h2>Button</h2>
    <Button on:click={onClick} >Button</Button>
    <Button on:click={onClick} type="primary">Button</Button>
    <Button on:click={onClick} type="black">Button</Button>
    <Button on:click={onClick} type="primary" outline circle>Button</Button>
    <Button on:click={onClick} outline>Button</Button>
    <Button on:click={onClick} type="primary" outline>Button</Button>
</div>