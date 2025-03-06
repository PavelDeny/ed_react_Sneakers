function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="img/btn-remove-hover.svg"
            alt="remove"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove-hover.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21498 руб</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ
            <img src="/img/arrowRight.svg" alt="arrowRoght" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
