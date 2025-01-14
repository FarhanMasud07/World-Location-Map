import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
      <button onClick={() => setSearchParams({ lat: "21", lng: "22" })}>
        Change Location
      </button>
    </div>
  );
}
