// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import Loader from "../components/Loader";
import { Props as jobType } from "../components/JobListing";


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

  return (
    
    <div>
      
        <h2>
          Job - {id} {job?.title}
        </h2>
      
    </div>
  );
};
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