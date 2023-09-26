"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>Oops, An unexpected error occured</div>
      <button className="btn btn-warning" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
