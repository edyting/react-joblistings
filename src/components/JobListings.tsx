
import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Loader from "./Loader";

interface Props{
  isHome : boolean
}

const JobListings = ({ isHome = false }: Props) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome? "/api/jobs?_limit=3":"/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetching data :", error);
      }finally{
        setIsLoading(false);
      }
    };
    fetchJobs();
  },[]);

    // getting recent jobs
    // const jobListings = isHome?jobs.slice(- 3).reverse():jobs; //this is for arrays 

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {isLoading ? (
            <div className="mx-auto w-1/6">
              <Loader loading={isLoading} />
            </div>
          ) : (
            //  {/* <!-- Job Listing  --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing job={job} key={job.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default JobListings
