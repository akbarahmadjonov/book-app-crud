import { BASE_URL } from "../../API/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
export const MustaqillikBook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + "/book/genreId/4").then((data) => {
      if (data) {
        console.log(data);
        setBook(data.data);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row my-5 gap-3 justify-content-center">
        {book.map((book) => (
          <BookCard obj={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};
