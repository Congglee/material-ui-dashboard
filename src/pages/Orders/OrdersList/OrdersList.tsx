import DataGrid from '~/components/DataGrid'
import columns from '~/pages/Orders/OrdersList/components/Columns'
import rows from '~/pages/Orders/OrdersList/components/Rows'
import PageHeader from '~/components/PageHeader'

const breadcrumbs = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/orders' }
]

export default function OrdersList() {
  return (
    <>
      <PageHeader heading='Orders' breadcrumbs={breadcrumbs} />
      <DataGrid columns={columns} rows={rows} sx={{ mt: 2 }} />
    </>
  )
}
