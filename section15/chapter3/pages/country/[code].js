import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import style from "./[code].module.css";
import Image from "next/image";

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>
          {country.officialName}
        </div>
      </div>

      <div className={style.flag_img}>
        <Image src={country.flagImg} fill />
      </div>

      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { code: "ABW" } },
      { params: { code: "KOR" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  console.log(`${code} 페이지 생성!`);

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};
