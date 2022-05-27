<script lang="ts">
import { getThemeFromContext } from "./hooks/getThemeFromContext";
	export let theme = "";
	export let flex = "center";
	const themeClass = getThemeFromContext(theme);
</script>

<footer class="{ flex+ ' ' + themeClass }">
    <slot/>
</footer>

<style>
	footer{
		min-height: 6vh;
        width: 100%;
		background-color: #1674E0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
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
		border-top: 1px solid #cacaca;
		color: #454545;
	}
	.space-between {
		justify-content: space-between;
	}
	.flex-start {
		justify-content: flex-start;
	}
</style>