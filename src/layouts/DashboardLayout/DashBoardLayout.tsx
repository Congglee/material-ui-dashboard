import Box from '@mui/material/Box'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '~/components/Sidebar'
import TopBar from '~/components/TopBar'

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
      <Outlet />
    </Box>
  )
}
