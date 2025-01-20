import { useSelector } from 'react-redux';
import { Card } from '../../types/Card';
import FavouritesButton from '../favouritesButton/favouritesButton';

function Favourites() {
  const favCards = useSelector((state: { cards: { favourites: Card[] } }) => state.cards.favourites);
  console.log('favCards ', favCards);

  return (
    <main className='px-16 pt-12'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12'>
        {favCards.slice().reverse().map((item: Card) => {
          return (
            <li
              key={item.id}
              className='h-[225px] w-[225px] relative transition-transform duration-300 hover:scale-110 hover:shadow-[0_6px_8px_0_rgba(0,0,0,0.5)] group'
            >
              <div className=''>
                <FavouritesButton card={item} />
              </div>
              <img
                src={item.url}
                alt={item.id}
                className='h-full w-full object-cover'
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Favourites;
