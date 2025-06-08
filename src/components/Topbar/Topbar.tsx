import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import { useColorScheme, useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import type { Mode } from '~/types/utils.type'

interface TopBarProps {
  sidebarOpen: boolean
  onSidebarOpen: () => void
}

export default function TopBar({ sidebarOpen, onSidebarOpen }: TopBarProps) {
  const [anchorThemeMenuEl, setAnchorThemeMenuEl] = useState<null | HTMLElement>(null)
  const isThemeMenuOpen = Boolean(anchorThemeMenuEl)

  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const { setMode } = useColorScheme()

  const toggleThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (!anchorThemeMenuEl) {
      setAnchorThemeMenuEl(event.currentTarget)
    } else {
      setAnchorThemeMenuEl(null)
    }
  }

  const handleChangeMode = (mode: Mode) => {
    setMode(mode)
  }

  const borderColor = isDarkMode ? theme.palette.primary.dark : theme.palette.primary.light

  return (
    <AppBar
      position='fixed'
      sx={{
        width: sidebarOpen ? `calc(100% - 320px)` : '100%',
        ml: sidebarOpen ? '320px' : 0,
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onSidebarOpen}
          edge='start'
          sx={{
            mr: 2,
            display: sidebarOpen ? 'none' : 'block'
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Stack direction='row' spacing={1}>
          <IconButton onClick={toggleThemeMenu} sx={{ border: '1px solid', borderColor }}>
            {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
          <IconButton sx={{ border: '1px solid', borderColor }}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton sx={{ border: '1px solid', borderColor }}>
            <PersonOutlinedIcon />
          </IconButton>
          <Menu
            id='theme-menu'
            anchorEl={anchorThemeMenuEl}
            open={isThemeMenuOpen}
            onClose={toggleThemeMenu}
            slotProps={{
              list: { 'aria-labelledby': 'theme-toggle-button' }
            }}
          >
            <MenuItem onClick={() => handleChangeMode('light')}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
                <LightModeOutlinedIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Light</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleChangeMode('dark')}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
                <DarkModeOutlinedIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Dark</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleChangeMode('system')}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
                <DevicesIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>System</ListItemText>
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
