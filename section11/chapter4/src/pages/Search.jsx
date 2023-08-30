import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div>Search {searchParams.get("q")}</div>;
}
