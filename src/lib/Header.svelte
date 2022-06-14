<script lang="ts">
	import { getThemeFromContext } from "./hooks/getThemeFromContext";
	export let flex: "flex-start" | "center" | "space-between" = "center";
	export let theme: "dark" | "default" | "light" = null;
	let themeClass = getThemeFromContext(theme)
</script>

<header class="{ flex + " " + themeClass }">
	<slot/>
</header>

<style>
	header{
		height: 6vh;
		width: 100%;
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
		background: linear-gradient(180deg, rgb(17, 11, 1) 0%, rgb(10, 102, 56) 100%);
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
