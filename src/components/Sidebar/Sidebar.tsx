import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialUI_Icon from '~/assets/material-ui.svg?react'
import Drawer from '~/components/Drawer'
import DrawerHeader from '~/components/Drawer/DrawerHeader'
import { path } from '~/constants/path'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const theme = useTheme()
  const location = useLocation()

  const [nestedMenuListOpen, setNestedMenuListOpen] = useState(false)

  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorMenuEl)

  const isPathActive = (pathname: string) => {
    return location.pathname === pathname
  }

  const isDashboardActive = () => {
    return location.pathname === path.dashboard || location.pathname === '/'
  }

  const toggleEmployeesMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (isMenuOpen) {
      setAnchorMenuEl(null)
      setNestedMenuListOpen(false)
    } else {
      setAnchorMenuEl(event.currentTarget)
      setNestedMenuListOpen(true)
    }
  }

  const handleNestedMenuListClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (open) {
      setNestedMenuListOpen(!nestedMenuListOpen)
    } else {
      toggleEmployeesMenu(event)
    }
  }

  return (
    <Drawer
      variant='permanent'
      open={open}
      sx={{
        '& .MuiPaper-root': {
          borderRightColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : '#e1bee7')
        }
      }}
    >
      <DrawerHeader sx={{ justifyContent: 'space-between' }}>
        <Link to={path.dashboard}>
          <Stack flexDirection='row' alignItems='center' p={1}>
            <Box
              sx={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <SvgIcon component={MaterialUI_Icon} inheritViewBox fontSize='medium' sx={{ fontSize: 40 }} />
            </Box>
            <Typography
              variant='h6'
              ml={1}
              sx={{ fontSize: '1.125rem', fontWeight: 700, color: (theme) => theme.palette.primary.main }}
            >
              MUI DashBoard
            </Typography>
          </Stack>
        </Link>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider sx={{ borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : '#e1bee7') }} />

      <Box component='nav' sx={{ overflowX: 'hidden', overflowY: 'auto', height: '100%' }}>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? '' : 'Dashboard'} placement='right'>
              <ListItemButton
                component={Link}
                to={path.dashboard}
                selected={isDashboardActive()}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText'
                      }
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial'
                      }
                    : {
                        justifyContent: 'center'
                      }
                ]}
              >
                <ListItemIcon sx={[{ minWidth: 0, alignItems: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          {open ? (
            <Typography
              variant='subtitle1'
              sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem' }}
            >
              Contents
            </Typography>
          ) : (
            <Tooltip title='Contents' placement='right'>
              <IconButton
                aria-label='more'
                sx={{ width: '100%', borderRadius: 0, '&:hover': { bgcolor: 'transparent' } }}
              >
                <MoreHorizIcon />
              </IconButton>
            </Tooltip>
          )}
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? '' : 'Orders'} placement='right'>
              <ListItemButton
                component={Link}
                to={path.orders}
                selected={isPathActive(path.orders)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText'
                      }
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial'
                      }
                    : {
                        justifyContent: 'center'
                      }
                ]}
              >
                <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Orders' sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? '' : 'Employees'} placement='right'>
              <ListItemButton
                id='basic-button-employees-actions'
                aria-controls={isMenuOpen ? 'basic-menu-employees-actions' : undefined}
                aria-haspopup='true'
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={handleNestedMenuListClick}
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open
                    ? {
                        justifyContent: 'initial'
                      }
                    : {
                        justifyContent: 'center'
                      }
                ]}
              >
                <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='Employees' sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
                {open && (nestedMenuListOpen ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </Tooltip>

            <Menu
              id='basic-menu-employees-actions'
              anchorEl={anchorMenuEl}
              open={isMenuOpen}
              onClose={toggleEmployeesMenu}
              slotProps={{
                list: { 'aria-labelledby': 'basic-button-employees-actions' }
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem
                sx={{
                  '&:hover': { bgcolor: 'transparent' },
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                Employees
              </MenuItem>
              <Divider />
              <MenuItem
                component={Link}
                to={path.employees}
                onClick={toggleEmployeesMenu}
                sx={{ fontSize: '0.875rem' }}
              >
                All Employees
              </MenuItem>
              <MenuItem
                component={Link}
                to={path.newEmployee}
                onClick={toggleEmployeesMenu}
                sx={{ fontSize: '0.875rem' }}
              >
                New Employee
              </MenuItem>
            </Menu>
          </ListItem>
          {open && (
            <Collapse in={nestedMenuListOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton
                  component={Link}
                  to={path.employees}
                  selected={isPathActive(path.employees)}
                  sx={{
                    pl: 4,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText primary='All Employees' />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to={path.newEmployee}
                  selected={isPathActive(path.newEmployee)}
                  sx={{
                    pl: 4,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText'
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary='New Employee' />
                </ListItemButton>
              </List>
            </Collapse>
          )}
          {open ? (
            <Typography
              variant='subtitle1'
              sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem' }}
            >
              Settings
            </Typography>
          ) : (
            <Tooltip title='Settings' placement='right'>
              <IconButton
                aria-label='more'
                sx={{ width: '100%', borderRadius: 0, '&:hover': { bgcolor: 'transparent' } }}
              >
                <MoreHorizIcon />
              </IconButton>
            </Tooltip>
          )}
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ? '' : 'Account'} placement='right'>
              <ListItemButton
                component={Link}
                to={path.account}
                selected={isPathActive(path.account)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText'
                      }
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial'
                      }
                    : {
                        justifyContent: 'center'
                      }
                ]}
              >
                <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Account' sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
      </Box>

      <Stack p={0}>
        <Divider />

        <Stack p={open ? 2 : 1} alignItems='center' justifyContent='center'>
          <Tooltip title={open ? '' : 'Sign Out'}>
            <Button
              variant='outlined'
              fullWidth
              size='medium'
              startIcon={open && <LogoutIcon />}
              color='secondary'
              sx={{
                minWidth: 0,
                height: '40px',
                py: 1,
                px: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              {open ? <Typography variant='body2'>Sign Out</Typography> : <LogoutIcon sx={{ width: 18, height: 18 }} />}
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Drawer>
  )
}
