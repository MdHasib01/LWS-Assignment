import React from "react";
import loader from "../../assets/images/loader.svg";
const LoaderText = () => {
  return (
    <>
      <img
        src={loader}
        className="animate-spin h-5 w-5 mr-3 text-blue inline-block"
        viewBox="0 0 24 24"
        alt="loader"
      />{" "}
      <span>Please Wait..</span>
    </>
  );
};

export default LoaderText;
