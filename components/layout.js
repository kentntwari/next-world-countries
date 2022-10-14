import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <main className="px-7 flex flex-col gap-8">{children}</main>
    </div>
  );
};

export default Layout;
