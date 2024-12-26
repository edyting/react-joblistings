import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage/>} />
    </Route>
  )
);


const App = () => {

  return (
    <RouterProvider router={router} />
    
  );
}

export default App
