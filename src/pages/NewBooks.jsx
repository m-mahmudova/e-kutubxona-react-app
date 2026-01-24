import Book from "../components/Book";

function NewBooks() {
  return (
    <main className="content">
      {/*  BANNERS ===== */}
      <div className="px-10 my-6">
        <div className="flex gap-6">
          {/* BANNER 1 */}
          <div className="relative flex-1 h-[300px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="w-full h-full object-cover"
              alt="recommendation"
            />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              Recommendation
            </div>
          </div>

          {/* BANNER 2 */}
          <div className="relative flex-1 h-[300px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              className="w-full h-full object-cover"
              alt="top books"
            />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              Top 50 books
            </div>
          </div>
        </div>
      </div>

      {/*  NEW BOOKS SECTION  */}
      <section className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-6">
          Yangi kitoblar
        </h2>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
            Barchasi
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200">
            Roman
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200">
            Biznes
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200">
            Ilmiy
          </button>
        </div>

        {/*  BOOK GRID (Redux bilan)  */}
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 px-10">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-14">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-200">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-200">
            3
          </button>
        </div>
      </section>
    </main>
  );
}

/*  BOOK DATA (OBYEKT SHAKLIDA)  */
const books = [
  {
    id: 1,
    img: "/images/1.jpg",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 25,
  },
  {
    id: 2,
    img: "/images/2.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    price: 18,
  },
  {
    id: 3,
    img: "/images/3.jpg",
    title: "Deep Work",
    author: "Cal Newport",
    price: 22,
  },
  {
    id: 4,
    img: "/images/4.jpg",
    title: "Psychology of Money",
    author: "Morgan Housel",
    price: 20,
  },
  {
    id: 5,
    img: "/images/5.jpg",
    title: "Start With Why",
    author: "Simon Sinek",
    price: 19,
  },
  {
    id: 6,
    img: "/images/6.jpg",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 17,
  },
  {
    id: 7,
    img: "/images/7.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 21,
  },
  {
    id: 8,
    img: "/images/8.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 16,
  },
];

export default NewBooks;
