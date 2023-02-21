import { BASE_URL } from "../../API/api";
import { Link } from "react-router-dom";
import { Image, Texts, Title } from "./BookCard.style";

export const BookCard = ({ obj }) => {
  const { id, image, title, description } = obj;

  return (
    <>
      <Link className="col-md-3 card p-0 text-decoration-none" to="/">
        <Image
          className="card-img-top"
          src={BASE_URL + "/" + image}
          width="190"
          height="283"
          alt={title}
        />
        <Title>{title}</Title>
        <Texts>{description}</Texts>
      </Link>
    </>
  );
};
