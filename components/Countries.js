import { Fragment } from 'react';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';

import FilterBar from './FilterBar';
import Country from './Country';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Countries = () => {
  const { data } = useSWR('https://restcountries.com/v3.1/all', fetcher);

  return (
    <section className="flex flex-col gap-10">
      {data && (
        <FilterBar
          continents={[...new Set(data.map((country) => country.region).sort())]}
        />
      )}

      <div className="w-fit m-auto grid grid-cols-1 justify-center gap-2">
        {data &&
          data.map(({ flags, name, population, region, capital }) => (
            <Fragment key={uuidv4()}>
              <Country
                image={flags.png}
                name={name.common}
                population={population}
                region={region}
                capital={capital}
              />
            </Fragment>
          ))}
      </div>
    </section>
  );
};

export default Countries;
