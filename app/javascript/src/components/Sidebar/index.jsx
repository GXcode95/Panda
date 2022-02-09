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
        breakPoint="md"
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
                {console.log("user",user)}
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MenuIcon  />}>
              <Link to="/">
                Accueil
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
                <Link to="/Login">
                  Se connecter
                </Link>
              </MenuItem>
            }
            

          </Menu>
        </SidebarContent>
      </ProSidebar>

      <IconButton 
        className="toggle-sidebar-btn"
        onClick={handleToggleSidebar}
        sx={{display:{xs: "block", sm:"none"}}}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default Sidebar