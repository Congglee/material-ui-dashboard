import { Route, Routes } from 'react-router-dom'
import { path } from '~/constants/path'
import DashBoardLayout from '~/layouts/DashboardLayout'
import DashBoard from '~/pages/DashBoard'
import OrdersList from '~/pages/Orders/OrdersList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardLayout />}>
        <Route index element={<DashBoard />} />
        <Route path={path.dashboard} element={<DashBoard />} />
        <Route path={path.orders} element={<OrdersList />} />
      </Route>
    </Routes>
  )
}

export default App
