// import { useEffect, useState } from "react";
import { Link, useLoaderData,useNavigate,useParams} from "react-router-dom";
// import Loader from "../components/Loader";
import { Props as jobType } from "../components/JobListing";
import { FaArrowLeft,FaMapMarker } from "react-icons/fa";


const JobPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = useLoaderData() as jobType;
  // const [job, setJob] = useState<jobType | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data: jobType = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log("error fetching data :", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, [id]);

  // delete job
  const navigate = useNavigate();

  const handleDelete = async (Jobid) => { 
    // confirmation message
    const confirm = window.confirm("Are you sure you want to delete this jobListing?");

    if (!confirm) return
    
    const res = await fetch(`/api/jobs/${Jobid}`, {
      method: "DELETE",
    });

    return navigate("/jobs")

  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className=" text-lg text-orange-700 mr-1"/>
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button onClick={()=>{handleDelete(job.id)}} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}




interface jobLoaderParams { id: string; }

 export const jobLoader = async ({ params }: { params: jobLoaderParams }) => {
   const res = await fetch(`/api/jobs/${params.id}`);
  //  if (!res.ok) {
  //    throw new Error(`Error ${res.status}: ${res.statusText}`); // to handle error if any
  //  }

   // console.log(params)
   const data: jobType = await res.json();
   return data;
 };

//  problem with this code was that i was using the wrong synthax for the params in loader function
//  i was using {params:jobLoaderParams} instead of { params }: { params: jobLoaderParams } or { params }: { params: {id:string} } which was causing the error
export default JobPage;