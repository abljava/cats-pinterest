import { useSelector } from 'react-redux';
import FavouritesButton from '../favouritesButton/favouritesButton';
import { Card } from '../../types/Card';

function CardList() {

  const cards = useSelector((state: { cards: { cards: Card[] } }) => state.cards.cards);

  return (
    <section className='mb-[50px]'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[48px]'>
        {cards.map((item: Card) => {
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
    </section>
  );
}

export default CardList;
