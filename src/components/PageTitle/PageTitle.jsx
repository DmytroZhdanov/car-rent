import { useResolvedPath } from "react-router-dom";
import { TitleH1 } from "./PageTitle.styled";

export default function PageTitle() {
  const { pathname } = useResolvedPath();
  const page = pathname.slice(1, pathname.length);

  return <TitleH1>{page}</TitleH1>;
}
