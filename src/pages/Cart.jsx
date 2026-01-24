import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../pages/redux/cartSlice";
import { FaTrash } from "react-icons/fa";


const USD_TO_UZS = 12500;

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalUSD = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totalUZS = totalUSD * USD_TO_UZS;

  return (
    <main className="content px-10 py-8 grid grid-cols-3 gap-8">
      {/* LEFT */}
      <div className="col-span-2 bg-white rounded-xl shadow p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Savatdagi mahsulotlar</h2>

          {items.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="text-red-500 text-sm"
            >
              Barchasini o‘chirish
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p>Savat hozircha bo‘sh</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  className="w-24 h-32 object-cover rounded"
                  alt={item.title}
                />

                <div>
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="font-bold text-blue-600">
                    {(item.price * USD_TO_UZS).toLocaleString()} so‘m
                  </p>

                  <p className="text-sm text-gray-500">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* QTY */}
              <div className="flex items-center gap-3">
                <button
                  className="w-8 h-8 border rounded-full"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  −
                </button>

                <span>{item.qty}</span>

                <button
                  className="w-8 h-8 border rounded-full"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>

             <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
             onClick={() => dispatch(removeFromCart(item.id))}
            >
  <FaTrash className="text-red-600" />
</button>

            </div>
          ))
        )}
      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-xl shadow p-6 h-fit">
        <h3 className="text-lg font-bold mb-4">Buyurtma haqida</h3>

        <div className="flex justify-between mb-2">
          <span>Mahsulotlar soni:</span>
          <span>{items.length} ta</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Chegirma:</span>
          <span>0 so‘m</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Jami:</span>
          <span>{totalUZS.toLocaleString()} so‘m</span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          (${totalUSD})
        </p>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Buyurtma berish
        </button>
      </div>
    </main>
  );
}

export default Cart;
