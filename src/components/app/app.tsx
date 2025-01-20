import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from "../header/header";
import Main from "../main/main";
import Favourites from "../favourites/favourites";

function App() {
  // const location = useLocation()
  // console.log(location.pathname);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </>
  );
}

export default App;
