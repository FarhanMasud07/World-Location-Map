import { IData } from "./IData";
import styles from "./CountryList.module.css";
import { Message } from "./Message";
import { CountryItem } from "./CountryItem";
import { Spinner } from "./Spinner";

export function CountryList({ cities, isLoading }: IData) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((arr: any, city: any) => {
    if (!arr.map((el: any) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country: any) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
