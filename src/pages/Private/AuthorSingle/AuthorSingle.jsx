import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../API/api";
import { Header } from "../../../components/Header/Header";
import { BookCard } from "../../../components/BookCard/BookCard";
import {
  AurhorInfo,
  AuthorBio,
  AuthorImage,
  AuthorName,
  AuthorText,
  AuthorWrapper,
  Block,
  BooksLink,
  BooksTitle,
  BooksWrapper,
  DateBlock,
  DateText,
  DateWrapper,
  Minus,
  BooksList
} from "./AuthorSingle.styled";

export const AuthorSingle = () => {
  const authorId = useParams();
  const token = useSelector((state) => state.token.token);
  const [authorBooks, setAuthorBooks] = useState([]);

  const [author, setAuthor] = useState([]);
  console.log(author);

  useEffect(() => {
    axios
      .get(BASE_URL + `/author/authorId/${authorId.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        setAuthor(data.data);
      });

    axios
      .get(BASE_URL + `/author/books/${authorId.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        setAuthorBooks(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(authorBooks);
  return (
    <>
      <Header />
      <Block className="container">
        <AuthorWrapper>
          <AuthorImage
            src={BASE_URL + "/" + author.image}
            width="505"
            height="681"
            alt={author.first_name}
          />
          <AurhorInfo>
            <AuthorName>
              {author.first_name} {author.last_name}
            </AuthorName>
            <AuthorBio>{author.bio}</AuthorBio>
            <DateWrapper>
              <DateBlock>
                <AuthorText>Tavallud sanasi</AuthorText>
                <DateText>{author.date_of_birth}</DateText>
                <AuthorText>{author.country}</AuthorText>
              </DateBlock>
              <Minus />
              <DateBlock>
                <AuthorText>Vafot etgan sana</AuthorText>
                <DateText>{author.date_of_death}</DateText>
                <AuthorText>{author.country}</AuthorText>
              </DateBlock>
            </DateWrapper>
          </AurhorInfo>
        </AuthorWrapper>

        <BooksWrapper>
          <Block>
            <BooksTitle>Asarlari</BooksTitle>
            <BooksList>
              {authorBooks.map((book) => (
                <BookCard obj={book} key={book.id} />
              ))}
            </BooksList>
          </Block>
          <BooksLink to="">Barchasini ko’rish</BooksLink>
        </BooksWrapper>
      </Block>
    </>
  );
};
