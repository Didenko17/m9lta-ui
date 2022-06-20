export default {
    header: `
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
    `,
    aside: `
        <Menu type="aside">
            <MenuItem name="AsideMenu 1" >AsideMenu 1</MenuItem>
            <MenuItem name="AsideMenu 2" >AsideMenu 2</MenuItem>
            <SubMenu name="Submenu2">
                <MenuItem name="AsideMenu 3" >AsideMenu 3</MenuItem>
                <MenuItem name="AsideMenu 4" >AsideMenu 4</MenuItem>
            </SubMenu>
            <MenuItem name="AsideMenu 5" >AsideMenu 5</MenuItem>
        </Menu>
    `,
}