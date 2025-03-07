import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  //  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://67c9797f102d684575c235f2.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    // axios
    //   .get("https://67c9797f102d684575c235f2.mockapi.io/cart")
    //   .then((res) => {
    //     setCartItems(res.data);
    //   });

    axios
      .get("https://67c9797f102d684575c235f2.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  //  const onAddToCart = (obj) => {
  //    axios.post("https://67c9797f102d684575c235f2.mockapi.io/cart", obj);
  //    setCartItems((prev) => [...prev, obj]);
  //  };

  //  const onRemoveItem = (id) => {
  //    axios.delete(`https://67c9797f102d684575c235f2.mockapi.io/cart/${id}`);
  //    setCartItems((prev) => prev.filter((item) => item.id !== id));
  //  };

  const onAddToFavorite = async (obj) => {
    try {
      const existingFavorite = favorites.find((favObj) => favObj.id === obj.id);

      if (existingFavorite) {
        await axios.delete(
          `https://67c9797f102d684575c235f2.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://67c9797f102d684575c235f2.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Ошибка добавления в избранное", error);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          // items={cartItems}
          onClose={() => setCartOpened(false)}
          // onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      {/*<Routes>
        <Route
          path="/"
          exact
          element={<Header onClickCart={() => setCartOpened(true)} />}
        />
      </Routes>*/}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={(e) => setSearchValue(e.target.value)}
              onAddToFavorite={onAddToFavorite}
              // onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
