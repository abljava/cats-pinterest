import { forwardRef } from "react";
import FavouritesButton from "../FavouritesButton/FavouritesButton";
import { Card } from "../../types/Card";

const CardItem = forwardRef<HTMLDivElement, { item: Card }>(({ item }, ref) => {
  return (
    <div
      ref={ref}
      key={item.id}
      className="h-[225px] w-[225px] relative transition-transform duration-300 hover:scale-110 hover:shadow-[0_6px_8px_0_rgba(0,0,0,0.5)] group"
    >
      <FavouritesButton card={item} />
      <img
        src={item.url}
        alt={item.id}
        className="h-full w-full object-cover"
      />
    </div>
  );
});

export default CardItem;
