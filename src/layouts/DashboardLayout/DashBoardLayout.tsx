import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '~/components/AppBar'
import Sidebar from '~/components/Sidebar'

export default function DashBoardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSidebarOpen = () => {
    setSidebarOpen(true)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <Box display='flex'>
      <AppBar position='fixed' open={sidebarOpen}>
        <Toolbar>
          <Stack width='100%' flexDirection='row' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
            <Stack flexDirection='row' alignItems='center'>
              <IconButton
                color='inherit'
                aria-label='open sidebar'
                onClick={handleSidebarOpen}
                edge='start'
                sx={{ ...(sidebarOpen && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <Outlet />
    </Box>
  )
}
