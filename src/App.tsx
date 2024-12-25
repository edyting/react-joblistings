import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
    </Route>
  )
);


const App = () => {

  return (
    <RouterProvider router={router} />
    
  );
}

export default App
