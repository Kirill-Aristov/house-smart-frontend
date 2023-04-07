import React from 'react'
import { AppBar, Stack, Typography, Menu, MenuItem } from "@mui/material"
import { Link, createBrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"
import Personal from "./Personal"
import { HomePage } from "../pages"

const Header = () => {
  return (
    <AppBar position="sticky">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: "100px" }}
      >
        <Link to="/"> <Typography sx={{ cursor: "pointer" }}> Умный дом</Typography></Link>
        <Navigation />
        <Personal />
      </Stack>
    </AppBar >
  )
}
export default Header