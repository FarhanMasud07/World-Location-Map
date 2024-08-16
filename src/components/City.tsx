import { useParams, useSearchParams } from "react-router-dom";

export function City() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      <p>id: {id}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  );
}
