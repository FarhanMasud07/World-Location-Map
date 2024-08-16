import { CityItem } from "./CityItem";
import styles from "./CityList.module.css";
import { IData } from "./IData";
import { Message } from "./Message";
import { Spinner } from "./Spinner";

export function CityLists({ cities, isLoading }: IData) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city: any) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
