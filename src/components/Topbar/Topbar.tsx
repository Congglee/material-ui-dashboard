import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { useColorScheme, useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import AppBar from '~/components/AppBar'
import type { Mode } from '~/types/utils.type'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

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

  return (
    <AppBar position='fixed' open={sidebarOpen}>
      <Toolbar>
        <Stack width='100%' flexDirection='row' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Stack flexDirection='row' alignItems='center'>
            <IconButton
              color='inherit'
              aria-label='open sidebar'
              onClick={onSidebarOpen}
              edge='start'
              sx={{ ...(sidebarOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          <Stack flexDirection='row' alignItems='center' ml='auto' useFlexGap gap={1}>
            <IconButton
              id='theme-toggle-button'
              aria-controls={isThemeMenuOpen ? 'theme-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={isThemeMenuOpen ? 'true' : undefined}
              onClick={toggleThemeMenu}
              sx={{ border: '1px solid', borderColor: isDarkMode ? '#363639' : '#e4e4e7' }}
            >
              {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
            <IconButton sx={{ border: '1px solid', borderColor: isDarkMode ? '#363639' : '#e4e4e7' }}>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ border: '1px solid', borderColor: isDarkMode ? '#363639' : '#e4e4e7' }}>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ border: '1px solid', borderColor: isDarkMode ? '#363639' : '#e4e4e7' }}>
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
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
