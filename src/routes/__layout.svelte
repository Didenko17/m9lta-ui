<script lang="ts">
	import '../app.css';
	import Content from "$lib/Content.svelte";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Menu from "$lib/Menu.svelte";
	import MenuItem from "$lib/MenuItem.svelte";
	import MLayout from "$lib/MLayout.svelte";
	import Aside from '$lib/Aside.svelte';
	import logo from '../img/m9lta-ui.png';
	import SubMenu from '$lib/SubMenu.svelte';
</script>


<MLayout theme="dark">
	<Header flex="space-between">
		<div class="logo">
			<img src="{logo}" alt="logo" />
		</div>
		<Menu>
			<MenuItem name="Home" to="/home">
				Home
			</MenuItem>
			<MenuItem name="Menu 2">
				Menu 2
			</MenuItem>
			<SubMenu name="Header Submenu">
				<MenuItem name="HeaderSub1">
					HeaderSub1
				</MenuItem>
				<MenuItem name="HeaderSub2">
					HeaderSub2
				</MenuItem>
			</SubMenu>
			<MenuItem name="Menu 4">
				Menu 2141525212152154
			</MenuItem>
		</Menu>
		<div class="logout">
			Logout
		</div>
	</Header>
	<Aside>
		<Menu type="aside">
			<SubMenu name="Layout">
				<MenuItem name="Ready layout" to="/readyLayout">
					Ready layout
				</MenuItem>
				<MenuItem name="Menu 6">
					Header
				</MenuItem>
				<MenuItem name="Menu 7">
					Aside
				</MenuItem>
				<MenuItem name="Footer">
					Footer
				</MenuItem>
				<MenuItem name="Menu">
					Menu
				</MenuItem>
				<MenuItem name="Content">
					Content
				</MenuItem>
				<MenuItem name="Column" to="/column">
					Row/Column
				</MenuItem>
			</SubMenu>
			<MenuItem name="Button" to="/button">
				Button
			</MenuItem>
			<SubMenu name="Input data">
				<MenuItem name="Input" to="/input">
					Input
				</MenuItem>
				<MenuItem name="Date\Time Picker">
					Date\Time Picker
				</MenuItem>
				<MenuItem name="Range">
					Range
				</MenuItem>
			</SubMenu>
		</Menu>
	</Aside>
	<Content>
		<slot></slot>
	</Content>
	<Footer>
		<div class="footer-text">
			@m9lta-ui
		</div>
	</Footer>
</MLayout>

<style>
</style>
