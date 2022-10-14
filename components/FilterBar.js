import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaChevronDown } from 'react-icons/fa';

const FilterBar = ({ continents }) => {
  const defaultText = useRef();

  function test(e) {
    defaultText.current.innerText = e.target.innerText;
  }

  return (
    <details className="w-[200px] block">
      <summary className="bg-white px-5 py-4 flex justify-between items-center rounded-sm shadow-md">
        <span ref={defaultText} className="text-sm">
          Filter by Region
        </span>
        <FaChevronDown />
      </summary>

      <ul className="bg-white mt-2 px-6 py-4 flex flex-col gap-2 shadow-md">
        {continents.map((x) => (
          <li key={uuidv4()} className="text-sm" onClick={test}>
            {x}
          </li>
        ))}
      </ul>
    </details>
  );
};

export default FilterBar;
