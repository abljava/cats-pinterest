import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#2196F3] px-[62px] flex items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.3)]">
      <nav>
        <ul className="flex">
          <li className="flex">
            <Link
              to="/"
              className="text-white/[.7] tracking-wide px-[25px] py-[21px] hover:bg-[#1E88E5] hover:text-white cursor-pointer transition-all"
            >
              Все котики
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/favourites"
              className="text-white/[.7] tracking-wide px-[25px] py-[21px] p-7 hover:bg-[#1E88E5] hover:text-white cursor-pointer transition-all"
            >
              Любимые котики
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
