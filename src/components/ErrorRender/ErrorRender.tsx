import Error from "next/error";

type ErrorRenderType = {
  statusCode: number;
  title: string;
};

export default function ErrorRender({ statusCode, title }: ErrorRenderType) {
  return (
    <>
      <Error statusCode={statusCode} title={title} />
    </>
  );
}
