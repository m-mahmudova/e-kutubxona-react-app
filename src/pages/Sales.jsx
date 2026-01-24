import { useDispatch } from "react-redux";
import { addToCart } from "../pages/redux/cartSlice";

function Sales() {
  const dispatch = useDispatch();

  const sales = [
    {
      id: 1,
      title: "Deep Work",
      oldPrice: 22,
      newPrice: 15,
      img: "/images/3.jpg",
    },
    {
      id: 2,
      title: "Start With Why",
      oldPrice: 19,
      newPrice: 12,
      img: "/images/5.jpg",
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      oldPrice: 17,
      newPrice: 10,
      img: "/images/6.jpg",
    },
    {
      id: 4,
      title: "Atomic Habits",
      oldPrice: 18,
      newPrice: 13,
      img: "/images/2.jpg",
    },
    {
      id: 5,
      title: "Psychology of Money",
      oldPrice: 20,
      newPrice: 14,
      img: "/images/4.jpg",
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      oldPrice: 21,
      newPrice: 16,
      img: "/images/7.jpg",
    },
  ];

  return (
    <main className="content py-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Chegirmadagi kitoblar
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Eng mashhur kitoblarni arzon narxlarda xarid qiling
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {sales.map((book) => {
          const discount = Math.round(
            100 - (book.newPrice * 100) / book.oldPrice
          );

          return (
            <div
              key={book.id}
              className="rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 relative bg-white"
            >
              {/* CHEGIRMA BADGE */}
              <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{discount}%
              </span>

              {/* RASM */}
              <img
                src={book.img}
                alt={book.title}
                className="h-[260px] w-full object-cover rounded-t-xl"
              />

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {book.title}
                </h3>

                <div className="flex items-center gap-3 mb-3">
                  <span className="line-through text-gray-400">
                    ${book.oldPrice}
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    ${book.newPrice}
                  </span>
                </div>

                {/* SAVATGA QO‘SHISH */}
                <button
                  onClick={() => dispatch(addToCart(book))}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Savatga qo‘shish
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Sales;
