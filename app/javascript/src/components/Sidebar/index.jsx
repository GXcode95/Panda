import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader,
   SidebarContent } from 'react-pro-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

import siderbarImg from "../../assets/sidebarImg.jpg"
import './index.scss'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const {user, signout} = useAuth()

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const collapsedBtnSx = collapsed ? {justifyContent: "center"} : {justifyContent: "space-between"}

  return (
    <>
      <ProSidebar className="Sidebar i-scroll" 
        image={siderbarImg} // set on false for classic bg
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="sm"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div className='collapse-sidebar-btn' style={collapsedBtnSx}>
            { !collapsed && <p className="title">P.A.N.D.A</p>}
            <button onClick={handleCollapsedChange}>
              { collapsed ? 
                <ArrowForwardIosIcon color='white' /> : 
                <ArrowBackIosIcon color='white'/>
              }
            </button>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MenuIcon  />}>
              <Link to="/">
                Accueil
              </Link>
            </MenuItem>
            <MenuItem icon={<MenuIcon  />}>
              <Link to="/sessions">
                Sessions
              </Link>
            </MenuItem>

            {user ? 
              <SubMenu 
                title="Compte" 
                icon={<MenuIcon  />}
              >
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={signout}>Déconnection</MenuItem>
              </SubMenu>
              :
              <MenuItem icon={<MenuIcon  />}>
                <Link to="/connection">
                  Se connecter
                </Link>
              </MenuItem>
            }
          </Menu>
        </SidebarContent>
      </ProSidebar>

      {user  && console.log("user",user)}

      {/* button to display when sidebar is toggleed */}
      <IconButton 
        onClick={handleToggleSidebar}
        sx={{
          position: "absolute", 
          top: 0, left: 0, 
          zIndex: 10,
          display: {xs: "block", sm: "none"},
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default Sidebar
