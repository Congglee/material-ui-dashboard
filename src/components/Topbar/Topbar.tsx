import MenuIcon from '@mui/icons-material/Menu'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '~/components/AppBar'
import ModeSelect from '~/components/TopBar/ModeSelect'
import Profiles from '~/components/TopBar/Profiles'

interface TopBarProps {
  sidebarOpen: boolean
  onSidebarOpen: () => void
}

export default function TopBar({ sidebarOpen, onSidebarOpen }: TopBarProps) {
  return (
    <AppBar position='fixed' open={sidebarOpen}>
      <Toolbar>
        <Stack width='100%' flexDirection='row' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Stack flexDirection='row' alignItems='center'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={onSidebarOpen}
              edge='start'
              sx={{ ...(sidebarOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          <Stack flexDirection='row' alignItems='center' ml='auto' useFlexGap gap={1}>
            <ModeSelect />
            <IconButton
              sx={{
                border: '1px solid',
                borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light')
              }}
            >
              <NotificationsOutlinedIcon />
            </IconButton>
            <Profiles />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
