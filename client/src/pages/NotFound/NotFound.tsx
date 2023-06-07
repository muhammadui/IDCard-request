import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>
        404 <br />
        Page Not Found{" "}
      </h1>

      <NavLink to="/">Back to Home</NavLink>
    </>
  );
};

export default NotFound;
