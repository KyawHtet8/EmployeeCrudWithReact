import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './component/ErrorPage.jsx'
import { EmployeeListComponent } from './component/EmployeeListComponent.jsx'
import { EmployeeFormComponent } from './component/EmployeeFormComponent.jsx'


const router = createBrowserRouter([
  { path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path: '/employees',
      element:<EmployeeListComponent></EmployeeListComponent>
    },
    {
      path: '/employee-form',
      element: <EmployeeFormComponent/>
    },
    {
      path:'/update-employee/:id',
      element:<EmployeeFormComponent></EmployeeFormComponent>
    }
  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
