import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form className="bg-white px-8 py-[14px] flex items-center gap-6 rounded-sm shadow-md ">
      <FaSearch />
      <input
        className="w-full focus:outline-none placeholder:text-xs"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
