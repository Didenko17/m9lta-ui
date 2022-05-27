<script lang="ts">
	import { getThemeFromContext } from "./hooks/getThemeFromContext";
	export let flex: string = "center";
	export let theme: string = "";
	let themeClass = getThemeFromContext(theme)
</script>

<header class="{ flex + " " + themeClass }">
	<slot/>
</header>

<style>
	header{
		height: 6vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 50px;
	}
	.center {
		justify-content: center;
	}
	.space-between {
		justify-content: space-between;
	}
	.flex-start {
		justify-content: flex-start;
	}
	.default {
		background-color: #1674E0;
		color: #fff;
	}
	.dark {
		background-color: #05203f;
		color: #fff;
	}
	.light {
		background-color: #fafafa;
		border-bottom: 1px solid #cacaca;
		color: #454545;
	}
	header :global(.logo) {
		max-width: 10vw;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	header :global(.logo img) {
		max-width: 100%;
		max-height: 60%;
	}
</style>
