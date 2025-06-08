import { useState } from 'react'
import PageHeader from '~/components/PageHeader'
import DataGrid from '~/components/DataGrid'
import NewEmployeeDialog from '~/components/Dialog/NewEmployeeDialog'
import columns from '~/pages/Employees/EmployeesList/components/Columns'
import rows from '~/pages/Employees/EmployeesList/components/Rows'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import ReplayIcon from '@mui/icons-material/Replay'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

const breadcrumbs = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Employees', href: '/employees' }
]

export default function EmployeesList() {
  const [newEmployeeDialogOpen, setNewEmployeeDialogOpen] = useState(false)

  const handleNewEmployeeDialogOpen = () => {
    setNewEmployeeDialogOpen(true)
  }

  const handleNewEmployeeDialogClose = () => {
    setNewEmployeeDialogOpen(false)
  }

  return (
    <>
      <PageHeader heading='Employees' breadcrumbs={breadcrumbs} />
      <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Stack sx={{ flex: '1 1 0%', width: '100%' }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <IconButton
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 2,
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
              }}
            >
              <ReplayIcon />
            </IconButton>
            <Button
              variant='contained'
              size='medium'
              color='primary'
              onClick={handleNewEmployeeDialogOpen}
              sx={{
                gap: 1,
                borderRadius: 2,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              <AddIcon fontSize='small' />
              Create new
            </Button>
          </Stack>
          <DataGrid columns={columns} rows={rows} />
        </Stack>
      </Box>

      <NewEmployeeDialog open={newEmployeeDialogOpen} onClose={handleNewEmployeeDialogClose} />
    </>
  )
}
