import { ClipLoader } from "react-spinners";

const Loader = (isLoading = false) => (
  <div className="loader-wrapper">
    <ClipLoader color={"#204051"} loading={isLoading} size={150} />
  </div>
);

export default Loader;
