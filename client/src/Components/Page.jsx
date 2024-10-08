import { useEffect, useMemo } from "react";
import usePage from "../hooks/usePage";
import { endLoading, startLoading } from "../utils";

export default function Page({ children }) {
  const { onLoad } = usePage();

  const render = useMemo(() => {
    return <>{children}</>;
  }, [children]);

  useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);

  return render;
}
