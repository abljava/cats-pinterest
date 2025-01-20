import { useState, useEffect, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../types/Card";
import CardItem from "../CardItem/CardItem";
import getCards from "../../api/api";
import { setCards } from "../../slices/cardSlice";

function CardList() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: { cards: { cards: Card[] } }) => state.cards.cards
  );
  const lastCard = createRef<HTMLDivElement>();

  const loadCards = () => {
    setLoading(true);
    getCards().then((cards: Card[]) => {
      dispatch(setCards(cards));
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!cards.length) {
      loadCards();
    } else {
      setLoading(false);
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
    <main className="px-[62px] pt-[52px] pb-12 flex flex-col">
      <section className="mb-[50px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[48px]">
          {cards.map((item: Card, index: number) => {
            return (
              <li key={item.id}>
                {index + 1 === cards.length ? (
                  <CardItem item={item} ref={lastCard} />
                ) : (
                  <CardItem item={item} />
                )}
              </li>
            );
          })}
        </ul>
      </section>
      {loading && (
        <div className="text-black p-3 m-auto">
          ... загружаем еще котиков ...
        </div>
      )}
    </main>
  );
}

export default CardList;
