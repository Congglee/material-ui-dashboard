import { DataGrid as MuiDataGrid, type DataGridProps } from '@mui/x-data-grid'

export default function DataGrid({ sx, ...props }: DataGridProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MuiDataGrid
        {...props}
        getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } }
        }}
        sx={{
          ...sx,
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
          '& .MuiDataGrid-cell': {
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
          },
          borderRadius: 2
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        slotProps={{
          filterPanel: {
            sx: {
              '& .MuiDataGrid-filterForm': {
                columnGap: 1.5,
                marginTop: 2
              }
            },
            filterFormProps: {
              logicOperatorInputProps: {
                variant: 'outlined',
                size: 'small'
              },
              columnInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' }
              },
              operatorInputProps: {
                variant: 'outlined',
                size: 'small',
                sx: { mt: 'auto' }
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: 'outlined',
                  size: 'small'
                }
              }
            }
          }
        }}
      />
    </div>
  )
}
