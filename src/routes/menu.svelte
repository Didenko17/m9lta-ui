<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Menu from "$lib/Menu.svelte";
    import MenuItem from "$lib/MenuItem.svelte";
    import SubMenu from "$lib/SubMenu.svelte";
    import PropsTable from "../components/propsTable.svelte";
    import type { PropsTableRow } from "src/types/PropsTableRow";
    import Code from "$lib/Code.svelte";
    import snippet from "../snippets/menu";

    const menuProps: PropsTableRow[] = [
        {
            props: "type",
            type: "'header' | 'aside'",
            default: 'header'
        }
    ]

    const menuItemProps: PropsTableRow[] = [
        {
            props: "name",
            type: "string",
            default: "''",
        },
        {
            props: "to",
            type: "string",
            default: "''",
        }
    ]

    const subMenuProps: PropsTableRow[] = [
        {
            props: "name",
            type: "string",
            default: "''",
        }
    ]
</script>
<div class="menu-page">
    <h2>Header menu</h2>
    <div class="example">
        <Header>
            <Menu type="header">
                <MenuItem name="TopMenu 1" >TopMenu 1</MenuItem>
                <MenuItem name="TopMenu 2" >TopMenu 2</MenuItem>
                <SubMenu name="Submenu1">
                    <MenuItem name="TopMenu 3" >TopMenu 3</MenuItem>
                    <MenuItem name="TopMenu 4" >TopMenu 4</MenuItem>
                </SubMenu>
            </Menu>
        </Header>
    </div>
    <div class="example">
        <Header theme="dark">
            <Menu type="header">
                <MenuItem name="TopMenu 1" >TopMenu 1</MenuItem>
                <MenuItem name="TopMenu 2" >TopMenu 2</MenuItem>
                <SubMenu name="Submenu1">
                    <MenuItem name="TopMenu 3" >TopMenu 3</MenuItem>
                    <MenuItem name="TopMenu 4" >TopMenu 4</MenuItem>
                </SubMenu>
            </Menu>
        </Header>
    </div>
    <div class="example">
        <Header theme="light">
            <Menu type="header">
                <MenuItem name="TopMenu 1" >TopMenu 1</MenuItem>
                <MenuItem name="TopMenu 2" >TopMenu 2</MenuItem>
                <SubMenu name="Submenu1">
                    <MenuItem name="TopMenu 3" >TopMenu 3</MenuItem>
                    <MenuItem name="TopMenu 4" >TopMenu 4</MenuItem>
                </SubMenu>
            </Menu>
        </Header>
    </div>
    <Code>{snippet.header}</Code>
    <h2>Aside menu</h2>
    <div class="example aside">
        <Menu type="aside">
            <MenuItem name="AsideMenu 1" >AsideMenu 1</MenuItem>
            <MenuItem name="AsideMenu 2" >AsideMenu 2</MenuItem>
            <SubMenu name="Submenu2">
                <MenuItem name="AsideMenu 3" >AsideMenu 3</MenuItem>
                <MenuItem name="AsideMenu 4" >AsideMenu 4</MenuItem>
            </SubMenu>
            <MenuItem name="AsideMenu 5" >AsideMenu 5</MenuItem>
        </Menu>
    </div>
    <Code>{snippet.aside}</Code>
    <h2>Menu API</h2>
    <PropsTable data={menuProps} />
    <h2>MenuItem API</h2>
    <PropsTable data={menuItemProps} />
    <h2>Submenu API</h2>
    <PropsTable data={subMenuProps} />
</div>

<style>
    .example {
        width: 320px;
        height: 240px;
        margin: 10px;
        border: 1px solid #cacaca;
        display: inline-flex;
        align-items: flex-start;
        overflow-y: auto;
    }
    .aside {
        width: 10%;
    }
</style>