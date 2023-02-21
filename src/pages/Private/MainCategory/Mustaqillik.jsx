import axios from "axios";
import React, { useEffect, useState } from "react";
import { CategoryBook } from "./CategoryBook";
export const Mustaqillik = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/author/genreId/${4}`).then((data) => {
      if (data) {
        console.log(data);
        setAuthor(data.data);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center gap-5">
        {author.map((author) => (
          <CategoryBook key={author.id} obj={author} />
        ))}
      </div>
    </div>
  );
};
