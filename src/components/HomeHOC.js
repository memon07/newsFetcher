import React , {useState} from 'react'
import { Drawer, Button, Menu } from 'antd';
import { Link, Route ,BrowserRouter as Router ,Switch } from 'react-router-dom'
import history from '../history'


import '../css/Home.css'
import menu from '../images/menu.svg'

import Home from '../components/Home'


function HomeHOC() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;


    const [visible,setVisible] = useState(false)

    function showDrawer() {
      setVisible(true)
    };
  
    function onClose() {
      setVisible(false)
    };

    return (
        <>
        <Router>
        <div className="dashboard-header ">
            <img src={menu} className="drawer-menu__img" onClick={showDrawer}  height="50px" alt="menu"/>
        </div>
        <div className="dashboard-body">
            <Home/>
        </div>
        <Drawer
          title="News"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                >
                    <MenuItemGroup key="g1">
                        <Menu.Item key="1">
                            <Link onClick={() => {
                                history.push("/dashboard")
                                setVisible(false)
                                }}>
                            Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link onClick={() => {
                                history.push("/history")
                                setVisible(false)
                                }}>
                            Histroy
                            </Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <div className="side-navigation__signin">
                        <Link onClick={() => {
                                history.push("/")
                                }}>
                            <Button>Signin</Button>
                        </Link>
                    </div>
                </Menu>
        </Drawer>
        </Router>
        </>
    )
}

export default HomeHOC