import ErrorRender from "../components/ErrorRender/ErrorRender";

export default function Error({ statusCode }: { statusCode: number }) {
  return (
    <ErrorRender
      statusCode={statusCode}
      title={
        statusCode
          ? `A ${statusCode} error occurred on the server`
          : "An error occurred on client"
      }
    />
  );
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
