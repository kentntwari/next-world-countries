import Image from 'next/image';
import Link from 'next/link';

const Country = ({ image, name, population, region, capital }) => {
  return (
    <Link href={'/' + name.toLowerCase()}>
      <a className="w-[264px] bg-white rounded-sm shadow-md">
        <Image src={image} width={264} height={160} layout="intrinsic" alt={name} />

        <div className="p-4 flex flex-col gap-3">
          <p className="font-bold text-base">{name}</p>

          <div className="flex flex-col gap-1">
            <p className="text-xs">
              <span className="font-semibold">Population: </span>
              {population}
            </p>
            <p className="text-xs">
              <span className="font-semibold">Region: </span> {region}
            </p>
            <p className="text-xs">
              <span className="font-semibold">Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Country;
