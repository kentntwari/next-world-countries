import { useCallback } from 'react';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';

import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Details = ({ data }) => {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = data;

  const fullBorderCountriesNames = useCallback(() => {
    const rawArray = borders
      .map((border) => {
        const { data } = useSWR(
          'https://restcountries.com/v3.1/alpha/' + border.toLowerCase(),
          fetcher
        );

        return data;
      })
      .map((res) => res && res[0].name.common);

    if (rawArray.some((elt) => elt === undefined) === false)
      return rawArray.map((res) => (
        <span key={uuidv4()} className="bg-white px-6 py-1 text-xs shadow-md">
          {res}
        </span>
      ));

    return [];
  }, [borders]);

  return (
    <section className="grid grid-cols-1 gap-10">
      <div className="w-full block">
        <Image
          src={flags.png}
          width={320}
          height={229}
          alt={name.common}
          layout="responsive"
          priority
        />
      </div>

      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-extrabold text-lg">{name.common}</span>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span>
                <span className="font-semibold text-sm">Native Name: </span>
                {Object.values(name.nativeName)
                  .map((res) => res.common)
                  .join(', ')}
              </span>
              <span>
                <span className="font-semibold text-sm">Population: </span>
                {population}
              </span>
              <span>
                <span className="font-semibold text-sm">Region: </span>
                {region}
              </span>
              <span>
                <span className="font-semibold text-sm">Sub Region: </span>
                {subregion}
              </span>
              <span>
                <span className="font-semibold text-sm">Capital: </span>
                {capital}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span>
                <span className="font-semibold text-sm">Top Level Domain: </span>
                {tld}
              </span>
              <span>
                <span className="font-semibold text-sm">Currencies: </span>
                {Object.values(currencies)[0].name}
              </span>
              <span>
                <span className="font-semibold text-sm">Languages: </span>
                {Object.values(languages).join(', ')}
              </span>
            </div>
          </div>
        </div>
        {borders && (
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-sm">Border Countries:</span>
            <span className="flex flex-wrap items-center gap-1">
              {fullBorderCountriesNames()}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
