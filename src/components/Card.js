function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/hurt_nofill.svg" alt="hurt_nofill" />
      </div>

      <img
        width={133}
        height={112}
        src="/img/sneakers/image1.jpg"
        //  src=""
        alt="sneakers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
