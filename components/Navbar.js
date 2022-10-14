import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="shadow-md">
      <nav className="px-4 py-[30px] flex justify-between items-center">
        <h1 className="font-bold">Where in the world</h1>
        <div className="flex items-center gap-2">
          <FaMoon />
          <span className="font-semibold text-xs">Dark Mode</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
