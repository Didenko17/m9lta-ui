<script lang="ts">
	import { setContext } from "svelte"
	export let theme: "default" | "light" | "dark" = "default";

	setContext("m9lta-ui-theme", {
		theme,
	})
</script>

<div class='layout'>
    <slot/>
</div>

<style>
	.layout{
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}
</style>
