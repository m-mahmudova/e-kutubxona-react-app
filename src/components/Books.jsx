import { useDispatch } from "react-redux";
import { addToCart } from "../pages/redux/cartSlice";

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <img src={book.img} alt={book.title} />
      <h3>{book.title}</h3>
      <p>${book.price}</p>

      <button
        onClick={() => dispatch(addToCart(book))}
        className="add-btn"
      >
        Savatga qo‘shish
      </button>
    </div>
  );
}

export default Book;
