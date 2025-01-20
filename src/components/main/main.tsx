import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../cardlist/cardlist";
import getCards from "../../api/api";
import { setCards } from "../../slices/cardSlice";
import { Card } from "../../types/Card";

function Main() {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: { cards: { cards: Card[] } }) => state.cards.cards
  );

  const loadCards = () => {
    getCards().then((cards: Card[]) => {
      dispatch(setCards(cards));
    });
  };



  useEffect(() => {
    if (!cards.length) {
      loadCards();
    }
  }, [cards]);


  return (
    <main className="px-[62px] pt-[52px] pb-12 flex flex-col">
      <CardList />
      <button onClick={() => loadCards()}>... загружаем еще котиков ...</button>
    </main>
  );
}

export default Main;
