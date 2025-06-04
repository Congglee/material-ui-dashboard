import type { GridCellParams, GridColDef } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const renderActions = (params: GridCellParams) => {
  return (
    <Stack
      direction='row'
      spacing={1}
      sx={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <IconButton
        size='small'
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? '#f5f6fa' : '#05070a'),
          '&:hover': {
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333c4d' : '#f5f6fa')
          }
        }}
        onClick={() => {
          // Handle edit action
          console.log('Edit employee:', params.row)
        }}
      >
        <EditIcon fontSize='small' />
      </IconButton>
      <IconButton
        size='small'
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? '#f5f6fa' : '#05070a'),
          '&:hover': {
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333c4d' : '#f5f6fa')
          }
        }}
        onClick={() => {
          // Handle delete action
          console.log('Delete employee:', params.row)
        }}
      >
        <DeleteIcon fontSize='small' />
      </IconButton>
    </Stack>
  )
}

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1.5,
    minWidth: 200
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'joinDate',
    headerName: 'Join date',
    width: 150,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'department',
    headerName: 'Department',
    flex: 1,
    minWidth: 150
  },
  {
    field: 'actions',
    headerName: '',
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: renderActions,
    align: 'center',
    headerAlign: 'right',
    display: 'flex'
  }
]
