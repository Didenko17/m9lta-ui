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


<MLayout>
	<Header flex="flex-start">
		<div class="logo">
			<img src={logo} alt="logo" />
		</div>
		<Menu>
			<MenuItem name="Home" to="/home">
				Home
			</MenuItem>
			<MenuItem name="Menu 2" to="https://www.npmjs.com/package/m9lta-ui">
				npm
			</MenuItem>
			<MenuItem name="Menu 2" to="https://github.com/Didenko17/m9lta-ui">
				Github
			</MenuItem>
		</Menu>
	</Header>
	<Aside>
		<Menu type="aside">
			<SubMenu name="Layout">
				<MenuItem name="MLayout" to="/readyLayout">
					MLayout
				</MenuItem>
				<MenuItem name="Header" to="/header">
					Header
				</MenuItem>
				<MenuItem name="Footer" to="/footer">
					Footer
				</MenuItem>
				<MenuItem name="Menu" to="/menu">
					Menu
				</MenuItem>
				<MenuItem name="Grid" to="/grid">
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
				<MenuItem name="Date Picker" to="/datePicker">
					Date Picker
				</MenuItem>
				<MenuItem name="Select" to="/select">
					Select
				</MenuItem>
				<MenuItem name="Checkbox" to="/checkbox">
					Checkbox
				</MenuItem>
				<MenuItem name="Radio" to="/radio">
					RadioInput
				</MenuItem>
				<MenuItem name="Toggle" to="/toggle">
					Toggle
				</MenuItem>
				<MenuItem name="Upload" to="/upload">
					Upload
				</MenuItem>
			</SubMenu>
			<SubMenu name="Data output">
				<MenuItem name="Avatar" to="/avatar">
					Avatar
				</MenuItem>
				<MenuItem name="Card" to="/card">
					Card
				</MenuItem>
				<MenuItem name="Progress" to="/progress">
					Progress
				</MenuItem>
				<MenuItem name="Tooltip" to="/tooltip">
					Tooltip
				</MenuItem>
				<MenuItem name="Carousel" to="/carousel">
					Carousel
				</MenuItem>
				<MenuItem name="Table" to="/table">
					Table
				</MenuItem>
				<MenuItem name="Tag" to="/tag">
					Tag
				</MenuItem>
				<MenuItem name="Tabs" to="/tabs">
					Tabs
				</MenuItem>
				<MenuItem name="Empty" to="/empty">
					Empty
				</MenuItem>
				<MenuItem name="Statistic" to="/statistic">
					Statistic
				</MenuItem>
			</SubMenu>
			<SubMenu name="Feedback">
				<MenuItem name="Modal" to="/modal">
					Modal
				</MenuItem>
				<MenuItem name="PopConfirm" to="/popconfirm">
					PopConfirm
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
