import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Props as jobType } from "../components/JobListing";


const JobPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<jobType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data: jobType = await res.json();
        setJob(data);
      } catch (error) {
        console.log("error fetching data :", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <h2>
          Job - {id} {job?.title}
        </h2>
      )}
    </div>
  );
};

export default JobPage;