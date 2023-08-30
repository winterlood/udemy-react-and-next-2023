import { useParams } from "react-router-dom";

export default function Country() {
  const pararms = useParams();
  console.log(pararms);

  return <div>Country : {pararms.code}</div>;
}
