<script lang="ts">
	import { getThemeFromContext } from "./hooks/getThemeFromContext";
	export let theme: "dark" | "default" | "light" = null;
	export let flex: "flex-start" | "center" | "space-between" = "center";
	const themeClass = getThemeFromContext(theme);
</script>

<footer class="{ flex+ ' ' + themeClass }">
    <slot/>
</footer>

<style>
	footer{
		min-height: 6vh;
		padding: 0px 50px;
        width: 100%;
		display: flex;
		align-items: center;
		color: #fff;
	}
	.default {
		background: linear-gradient(180deg, rgb(1, 43, 22) 0%, rgb(17, 11, 1) 100%);
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
	.center {
		justify-content: center;
	}
	.space-between {
		justify-content: space-between;
	}
	.flex-start {
		justify-content: flex-start;
	}
</style>