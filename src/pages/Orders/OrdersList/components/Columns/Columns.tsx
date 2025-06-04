import type { GridCellParams, GridColDef } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import { getDaysInMonth } from '~/utils/dates'

type SparkLineData = number[]

const renderStatus = (status: 'In Stock' | 'Out of Stock' | 'Low Stock') => {
  const colors: { [index: string]: 'success' | 'error' | 'default' } = {
    'In Stock': 'success',
    'Out of Stock': 'error',
    'Low Stock': 'default'
  }

  return <Chip label={status} color={colors[status]} size='small' />
}

const renderSparklineCell = (params: GridCellParams<SparkLineData, any>) => {
  const data = getDaysInMonth(4, 2024)
  const { value, colDef } = params

  if (!value || value.length === 0) {
    return null
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType='bar'
        showHighlight
        showTooltip
        color='hsl(210, 98%, 42%)'
        xAxis={{ scaleType: 'band', data }}
      />
    </div>
  )
}

export const columns: GridColDef[] = [
  { field: 'productName', headerName: 'Product Name', flex: 1.5, minWidth: 200 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.value as any)
  },
  {
    field: 'totalOrders',
    headerName: 'Total Orders',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80
  },
  {
    field: 'revenue',
    headerName: 'Revenue',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'avgOrderValue',
    headerName: 'Avg Order Value',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 120
  },
  {
    field: 'processingTime',
    headerName: 'Processing Time',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100
  },
  {
    field: 'dailyOrders',
    headerName: 'Daily Orders',
    flex: 1,
    minWidth: 150,
    renderCell: renderSparklineCell
  }
]
