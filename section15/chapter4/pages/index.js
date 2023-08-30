import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
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
