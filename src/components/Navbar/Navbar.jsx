import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white font-bold py-2 px-10 flex flex-row">
      <h1 className="basis-3/4 text-2xl">Movies App</h1>
      <Link to="/" className="basis-1/12">
        Home
      </Link>
      <h2 className="basis-1/12">Movies</h2>
      <h2 className="basis-1/12">Series</h2>
    </div>
  );
};

export default Navbar;
