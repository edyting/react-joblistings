import RiseLoader from "react-spinners/RiseLoader";

interface Props{
    loading:boolean
}
 
const override = {
    display: "block",
    margin : "100px auto"
}

const Loader = ({ loading }:Props) => {
    
  return (
    <div>
          <RiseLoader
              color="#4338ca"
              loading={loading}
              cssOverride={override}
              size={30 }
          />
    </div>
  )
}

export default Loader
