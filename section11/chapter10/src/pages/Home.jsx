import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import style from "./Home.module.css";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
}
