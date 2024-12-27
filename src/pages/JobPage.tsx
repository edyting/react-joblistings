// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import Loader from "../components/Loader";
import { Props as jobType } from "../components/JobListing";


const JobPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = useLoaderData<jobType>();
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

const jobLoader = async (params:jobLoaderParams) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  console.log(params)
  const data: jobType = await res.json();
  return data;
}

export{JobPage as default,jobLoader};