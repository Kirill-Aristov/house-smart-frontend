import React from 'react'
import { Button, ButtonGroup } from "@mui/material"
import { NavLink } from "react-router-dom"
const Navigation = () => {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button> <NavLink to="/" className={({ isActive }) => isActive ? "" : ""}>Дом</NavLink>
      </Button>
      <Button><NavLink to="/model" className={({ isActive }) => isActive ? "" : ""}>модель</NavLink></Button>
      <Button><NavLink to="/shop" className={({ isActive }) => isActive ? "" : ""}>магазин</NavLink></Button>
      <Button><NavLink to="/settings" className={({ isActive }) => isActive ? "" : ""}>настройки</NavLink></Button>
    </ButtonGroup>
  )
}


export default Navigation