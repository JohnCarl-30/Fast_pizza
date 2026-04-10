import { useRouteError } from "react-router-dom";

interface RouteError {
  data?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message}</p>
    </div>
  );
}

export default Error;
