import { createBrowserRouter} from "react-router-dom"
import { Home } from "./views/home"
import { Layout } from "./components/Layout";
import { AllProjects } from "./views/allProjects";



const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <AllProjects/>
      }       
    ]
  }
])

export {router};