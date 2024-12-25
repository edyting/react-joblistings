
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const Home = () => {
  return (
    <div>
          <Navbar />
          

      {/* <!-- Hero --> */}
          <Hero />
          

      {/* <!-- Developers and Employers --> */}
          <HomeCards />
          

      {/* <!-- Browse Jobs --> */}
          <JobListings />
          

      {/* <!-- View All Jobs --> */}
          <ViewAllJobs />

    </div>
  );
}

export default Home
