import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/job/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
    
  );
}

export default App
