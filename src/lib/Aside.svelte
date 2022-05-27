<script lang="ts">
</script>

<aside>
	<nav class="aside">
		<slot/>
	</nav>
</aside>

<style>
    aside{
        min-height:88vh;
        width:calc(10% - 1px);
        background-color: #fff;
        border-right: 1px solid #cacaca;
    }
	nav{
		height: 100%;
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #666;
	}
</style>