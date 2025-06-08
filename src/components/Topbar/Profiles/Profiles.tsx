import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { mockUserData } from '~/constants/mock-data'

export default function Profiles() {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorMenuEl)

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (!anchorMenuEl) {
      setAnchorMenuEl(event.currentTarget)
    } else {
      setAnchorMenuEl(null)
    }
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
        <PersonOutlinedIcon />
      </IconButton>

      <Menu
        id='user-menu'
        anchorEl={anchorMenuEl}
        open={isMenuOpen}
        onClose={toggleMenu}
        slotProps={{
          list: { 'aria-labelledby': 'user-menu-button' },
          paper: {
            sx: { minWidth: 200, mt: 1 }
          }
        }}
      >
        <Box sx={{ px: 2, pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              src={mockUserData.avatar}
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'primary.main'
              }}
            >
              {!mockUserData.avatar &&
                mockUserData.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant='subtitle2'
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {mockUserData.name}
              </Typography>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{
                  lineHeight: 1.2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  display: 'block'
                }}
              >
                {mockUserData.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <MenuItem sx={{ mt: 1 }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <AccountCircleOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <SettingsOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '32px' } }}>
            <LogoutOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
