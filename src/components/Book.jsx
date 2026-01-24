import { useDispatch } from "react-redux";
import { addToCart } from "../pages/redux/cartSlice";
import { FaShoppingCart } from "react-icons/fa";


function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition">
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-[220px] object-cover rounded-xl"
      />

      <h4 className="mt-3 font-semibold text-sm">
        {book.title}
      </h4>

      <p className="text-blue-600 font-bold mt-2">
        {book.price} $
      </p>

      {/* PASTKI TUGMALAR */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Xarid qilish
        </button>
<button
  onClick={() => dispatch(addToCart(book))}
  className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition"
>
  <FaShoppingCart className="text-white text-xl" />
</button>

      </div>
    </div>
  );
}

export default Book;
