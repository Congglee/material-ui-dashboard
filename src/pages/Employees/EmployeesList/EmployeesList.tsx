import PageHeader from '~/components/PageHeader'
import DataGrid from '~/components/DataGrid'
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
                borderColor: (theme) => (theme.palette.mode === 'dark' ? '#333c4d' : '#dadee7')
              }}
            >
              <ReplayIcon />
            </IconButton>
            <Button
              variant='contained'
              size='medium'
              color='primary'
              sx={{
                gap: 1,
                borderRadius: 2,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#f5f6fa' : '#05070a'),
                '&:hover': {
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#c2c9d6' : '#333c4d')
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
    </>
  )
}
