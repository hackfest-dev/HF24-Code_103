import { Link } from "react-router-dom";
const ErrorEl = () => {
  return (
    <div>
      <div>Error 404</div>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default ErrorEl;
