import Box from '@mui/material/Box'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import Sidebar from '~/components/Sidebar'
import TopBar from '~/components/TopBar'
import Stack from '@mui/material/Stack'
import DrawerHeader from '~/components/Drawer/DrawerHeader'
import CopyRight from '~/components/CopyRight'

export default function DashBoardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const onSidebarOpen = () => {
    setSidebarOpen(true)
  }

  const onSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <Box display='flex'>
      <Sidebar open={sidebarOpen} onClose={onSidebarClose} />
      <TopBar sidebarOpen={sidebarOpen} onSidebarOpen={onSidebarOpen} />
      <Box component='main' display='flex' flexDirection='column' flex={1} overflow='auto'>
        <DrawerHeader />
        <Container sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Stack flex={1} my={2}>
            <Outlet />
            <CopyRight styles={{ my: 4 }} />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
