import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useColorScheme, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { darkThemeColors, lightThemeColors } from '~/theme'
import type { Mode } from '~/types/utils.type'

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { setMode } = useColorScheme()

  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const handleSelectMode = (mode: Mode) => {
    setMode(mode)
  }

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box
        display='flex'
        sx={{
          bgcolor: isDarkMode ? darkThemeColors.primary[400] : lightThemeColors.primary[400]
        }}
        borderRadius='3px'
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search...' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display='flex'>
        <IconButton
          id='theme-toggle-button'
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      <Menu
        id='theme-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { 'aria-labelledby': 'theme-toggle-button' }
        }}
      >
        <MenuItem onClick={() => handleSelectMode('light')}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <LightModeOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSelectMode('dark')}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <DarkModeOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSelectMode('system')}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <DevicesIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>System</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}
