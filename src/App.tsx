import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={ } />,
  )
);


const App = () => {

  return (
    <div>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}
      <HomeCards/> 

      {/* <!-- Browse Jobs --> */}
      <JobListings />
      
      {/* <!-- View All Jobs --> */}
     <ViewAllJobs/>
    </div>
  );
}

export default App
