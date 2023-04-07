import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Box, Avatar, Stack, Menu, MenuItem, Badge } from "@mui/material";

const menuPersonal = [
  "", "Добавить аккаунт", "Выйти"
]
const Personal = () => {
  const [menuVisible, setMenuVisible] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menuVisible);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setMenuVisible(event.currentTarget);
  };
  const handleClose = () => {
    setMenuVisible(null);
  };
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartOutlinedIcon sx={{ cursor: "pointer" }} />
        </Badge>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar
            alt=""
            src=""
          />

          <NavigationIcon
            sx={{
              transform: "rotate(180deg)"
            }}
          />
        </Stack>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={menuVisible}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuPersonal.map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Personal