import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-[#2196F3] px-16 flex items-center'>
      <nav>
        <ul className='flex gap-4'>
          <li >
            <Link to='/' className='text-white p-6 hover:bg-[#1E88E5] hover:text-white/[.7] cursor-pointer'>Все котики</Link>
          </li>
          <li className='text-white p-6 hover:bg-[#1E88E5] hover:text-white/[.7] cursor-pointer '>
            <Link to='/favourites'>Любимые котики</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
