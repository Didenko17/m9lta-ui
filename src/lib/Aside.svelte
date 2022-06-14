<aside>
	<nav class="aside">
		<slot/>
	</nav>
</aside>

<style>
    aside{
        height:88vh;
        width:10%;
        background-color: #fff;
        box-sizing: border-box;
        border-right: 1px solid #cacaca;
        overflow-y: scroll;
    }
	nav{
		width: 100%;
		display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #666;
	}
</style>