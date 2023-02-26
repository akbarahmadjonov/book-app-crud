import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../API/api";

export const BookSingle = () => {
  const token = useSelector((state) => state.token.token);
  const [book, setBook] = useState([]);
  const bookId = useParams();

  useEffect(() => {
    axios
      .get(BASE_URL + `/book/bookId/${bookId.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        setBook(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(book);

  return <div>{book}</div>;
};
