import { BASE_URL } from "../../API/api";
import { BookLink, Image, Texts, Title } from "./BookCard.style";

export const BookCard = ({ obj }) => {
  const { id, image, title, description } = obj;

  // 1. Pathga /: qivolamiz yani bundan keyin id keladi degani
  // 2. Linkga to ga id yozamiz ya'ni ichma ich routda bu
  // 3. useparams orqali ovolamiz ma'lumotni singlepageda

  return (
    <>
      <BookLink
        className="col-md-3 card p-0 text-decoration-none"
        to={`book/${id}`}
      >
        <Image
          className="card-img-top"
          src={BASE_URL + "/" + image}
          width="190"
          height="283"
          alt={title}
        />
        <Title>{title}</Title>
        <Texts>
          {description.split(" ").splice(0, 10).join(" ") + "....."}
        </Texts>
      </BookLink>
    </>
  );
};
