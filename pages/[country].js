import Head from 'next/head';
import { useRouter } from 'next/router';

import { FaArrowLeft as Arrow } from 'react-icons/fa';
import Details from '../components/Details';

const Country = ({ data, country }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{country.charAt(0).toUpperCase() + country.slice(1)}</title>
      </Head>

      <div className="flex flex-col gap-10">
        <span
          className="w-fit flex items-center gap-2 text-base"
          onClick={() => router.back()}>
          <Arrow />
          Back
        </span>

        <Details data={data[0]} />
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { country } = ctx.query;
  const res = await fetch('https://restcountries.com/v3.1/name/' + country);
  const data = await res.json();

  return {
    props: {
      data,
      country,
    },
  };
};

export default Country;
