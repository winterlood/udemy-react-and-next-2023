import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import { useEffect } from "react";

export default function Home({ countries }) {
  return (
    <>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  // API 호출 코드가 필요함

  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");

  return {
    props: {
      countries,
    },
  };
};
