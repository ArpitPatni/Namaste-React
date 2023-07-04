import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Something went wrong</h1>
      <div>{error?.statusText}</div>
    </>
  );
};

export default Error;
