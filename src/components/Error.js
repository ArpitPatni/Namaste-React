import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>{error.error.message}</div>
      <div>{error.status}</div>
      <div>{error.statusText}</div>
    </>
  );
};

export default Error;
