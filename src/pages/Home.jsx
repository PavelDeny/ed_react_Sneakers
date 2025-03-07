import Card from "../components/Card";

function Home({items,
   searchValue,
   setSearchValue,
   onChangeSearchInput,
   onAddToFavorite,
   onAddToCart
   }) {
   return (
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex ">
            <img src="img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className=" clear cu-p"
                src="img/btn-remove-hover.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                //  key={item.imageUrl}
                key={index}
                
                onFavorite={(obj) => onAddToFavorite(obj)}
               //  onPlus={(obj) => onAddToCart(obj)}
               {...item}
              />
            ))}
        </div>
      </div>
   )
}


export default Home;