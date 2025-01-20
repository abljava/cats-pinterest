import { useEffect, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../types/Card";
import CardItem from "../CardItem/CardItem";
import getCards from "../../api/api";
import { setCards } from "../../slices/cardSlice";

function CardList() {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: { cards: { cards: Card[] } }) => state.cards.cards
  );
  const lastCard = createRef<HTMLLIElement>();

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadCards(); // Загружаем карточки, когда элемент виден
      }
    });

    if (lastCard.current) {
      observer.observe(lastCard.current); // Начинаем наблюдение за элементом
    }

    return () => {
      if (lastCard.current) {
        observer.unobserve(lastCard.current); // Отключаем наблюдение при размонтировании
      }
    };
  }, [lastCard]);

  return (
    <section className="mb-[50px]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[48px]">
        {cards.map((item: Card, index: number) => {
          return (
            <>
              {index + 1 === cards.length ? (
                <CardItem item={item} ref={lastCard} />
              ) : (
                <CardItem item={item} />
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default CardList;
