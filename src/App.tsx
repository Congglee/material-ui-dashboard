import { Route, Routes } from 'react-router-dom'
import { path } from '~/constants/path'
import DashBoardLayout from '~/layouts/DashboardLayout'
import DashBoard from '~/pages/DashBoard'
import OrdersList from '~/pages/Orders/OrdersList'
import EmployeesList from '~/pages/Employees/EmployeesList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardLayout />}>
        <Route index element={<DashBoard />} />
        <Route path={path.dashboard} element={<DashBoard />} />
        <Route path={path.orders} element={<OrdersList />} />
        <Route path={path.employees} element={<EmployeesList />} />
      </Route>
    </Routes>
  )
}

export default App
