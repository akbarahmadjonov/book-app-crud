import axios from "axios";
import React, { useEffect, useState } from "react";
import { CategoryBook } from "./CategoryBook";

export const Sovet = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/author/genreId/${3}`).then((data) => {
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
