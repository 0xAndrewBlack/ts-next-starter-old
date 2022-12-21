import { useState, useEffect, PropsWithChildren } from "react";
import Router from "next/router";

import Loading from "../components/Loading/Loading";

export default function BasicLayout(props: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on("routeChangeStart", updateLoadingStatus);
    Router.events.on("routeChangeComplete", updateLoadingStatus);

    return () => {
      Router.events.off("routeChangeStart", updateLoadingStatus);
      Router.events.off("routeChangeComplete", updateLoadingStatus);
    };
  }, [isLoading]);

  return <div>{isLoading ? <Loading /> : props.children}</div>;
}
