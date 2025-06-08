import { useColorScheme, useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DevicesIcon from '@mui/icons-material/Devices'
import type { Mode } from '~/types/utils.type'

export default function ModeSelect() {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorMenuEl)

  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const { setMode } = useColorScheme()

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (!anchorMenuEl) {
      setAnchorMenuEl(event.currentTarget)
    } else {
      setAnchorMenuEl(null)
    }
  }

  const handleChangeMode = (mode: Mode) => {
    setMode(mode)
  }

  return (
    <>
      <IconButton
        onClick={toggleMenu}
        sx={{
          border: '1px solid',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light')
        }}
      >
        {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>

      <Menu
        id='theme-menu'
        anchorEl={anchorMenuEl}
        open={isMenuOpen}
        onClose={toggleMenu}
        slotProps={{
          list: { 'aria-labelledby': 'theme-toggle-button' },
          paper: {
            sx: { mt: 1 }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
    </>
  )
}
