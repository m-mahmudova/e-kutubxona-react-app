function BookList({ books }) {
  return (
    <>
      <h2 className="section-title">Ommabop kitoblar</h2>
      <p>Kutubxonadagi kitoblar soni: {books.length}</p>

      <div className="books">
        {books.map((img, index) => (
          <div className="book" key={index}>
            <img src={img} height="180" alt="kitob" />
          </div>
        ))}
      </div>
    </>
  );
}

export default BookList;
