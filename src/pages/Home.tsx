

import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const Home = () => {
  return (
    <div>
          

      {/* <!-- Hero --> */}
          <Hero />
          

      {/* <!-- Developers and Employers --> */}
          <HomeCards />
          

      {/* <!-- Browse Jobs --> */}
          <JobListings isHome={true} />
          

      {/* <!-- View All Jobs --> */}
          <ViewAllJobs />

    </div>
  );
}

export default Home
