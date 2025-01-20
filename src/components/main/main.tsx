import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardList from '../cardlist/cardlist';
import getCards from '../../api/api';
import { setCards } from '../../slices/cardSlice';
import { Card } from '../../types/Card';

function Main() {
  const dispatch = useDispatch();

  const loadCards = () => {
    getCards().then((cards: Card[]) => {
      dispatch(setCards(cards));
    });
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <main className='px-16 py-12 flex flex-col'>
      <CardList />
      <button onClick={() => loadCards()} >... загружаем еще котиков ...</button>
    </main>
  );
}

export default Main;
