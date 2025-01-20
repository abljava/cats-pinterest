import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Favourites from "../Favourites/Favourites";
import CardList from "../Cardlist/Cardlist";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
