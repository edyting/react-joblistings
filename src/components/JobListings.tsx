import jobs from "../jobs.json"
import JobListing from "./JobListing";

interface Props{
  isHome : boolean
}

const JobListings = ({isHome = false}:Props) => {

    // getting recent jobs
    const jobListings = isHome?jobs.slice(- 3).reverse():jobs;

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing  --> */}
             {jobListings.map((job) => (
                
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobListings
