import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

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
    <div>
      {country.commonName} {country.officialName}
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
