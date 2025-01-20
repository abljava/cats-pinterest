import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../../slices/cardSlice';
import { Card } from '../../types/Card';

function FavouritesButton({ card }: { card: Card }) {
  const dispatch = useDispatch();
  const savedCard = useSelector((state: { cards: { favourites: Card[] } }) => state.cards.favourites);
  const isLiked = savedCard.some((i) => i.id === card.id);

  function handleClick(card: Card) {
    dispatch(addToFavourite(card));
  }

  return (
    <button
      onClick={() => handleClick(card)}
      className={`h-10 w-10 absolute ${
        isLiked ? 'bg-[url("/heart-clicked.svg")]' : 'bg-[url("/heart.svg")]'
      } bg-contain bg-no-repeat hover:bg-[url("/heart-hovered.svg")] bottom-[28px] right-[21px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 `}
    />
  );
}

export default FavouritesButton;
