function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Корзина
          <img
            className="removeBtn"
            src="img/btn-remove-hover.svg"
            alt="remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="img/btn-remove-hover.svg"
              alt="remove"
            />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="img/btn-remove-hover.svg"
              alt="remove"
            />
          </div>
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
