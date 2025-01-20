import { forwardRef } from "react";
import FavouritesButton from "../favouritesButton/favouritesButton";
import { Card } from "../../types/Card";

const CardItem = forwardRef<HTMLLIElement, { item: Card }>(({ item }, ref) => {
  return (
    <li
      ref={ref} // Передаем реф в элемент li
      key={item.id}
      className="h-[225px] w-[225px] relative transition-transform duration-300 hover:scale-110 hover:shadow-[0_6px_8px_0_rgba(0,0,0,0.5)] group"
    >
      <div className="">
        <FavouritesButton card={item} />
      </div>
      <img
        src={item.url}
        alt={item.id}
        className="h-full w-full object-cover"
      />
    </li>
  );
});

export default CardItem;
