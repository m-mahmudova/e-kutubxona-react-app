function BestSellers() {
  const books = [
    { title: "Atomic Habits", author: "James Clear", price: 18, rating: 5, img: "/images/2.jpg" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 21, rating: 4, img: "/images/7.jpg" },
    { title: "The Alchemist", author: "Paulo Coelho", price: 16, rating: 5, img: "/images/8.jpg" },
    { title: "Clean Code", author: "Robert C. Martin", price: 25, rating: 4, img: "/images/1.jpg" },
  ];

  return (
    <main className="content py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Eng ko‘p sotilgan kitoblar
      </h2>

      <div className="grid grid-cols-4 gap-8 px-10">
        {books.map((book, i) => (
          <div key={i} className="rounded-xl shadow hover:shadow-xl transition">
            <img src={book.img} className="h-[260px] w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.author}</p>
              <p className="text-yellow-500">{"⭐".repeat(book.rating)}</p>
              <span className="text-blue-600 font-bold">${book.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BestSellers;
