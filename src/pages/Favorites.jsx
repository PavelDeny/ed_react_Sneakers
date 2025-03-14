import Card from "../components/Card";

function Favorites({items, onAddToFavorite}) {
   return (
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            Мои Закладки
          </h1>
          
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items.map((item, index) => (
                        <Card
                          //  key={item.imageUrl}
                        //  key={index}
                        //  id={item.id}
                        //  title={item.title}
                        //  price={item.price}
                        //  imageUrl={item.imageUrl}
                        //  favorited={true}
                        //  onFavorite={onAddToFavorite}

                        key={index}
                          favorited={true}
                          onFavorite={onAddToFavorite}
                          {...item}
                        />
                      ))}
        </div>
      </div>
   )
}


export default Favorites;