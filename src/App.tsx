import { Route, Routes } from 'react-router-dom'
import { path } from '~/constants/path'
import DashBoardLayout from '~/layouts/DashboardLayout'
import DashBoard from '~/pages/DashBoard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardLayout />}>
        <Route index element={<DashBoard />} />
        <Route path={path.dashboard} element={<DashBoard />} />
      </Route>
    </Routes>
  )
}

export default App
