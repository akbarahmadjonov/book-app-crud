import CardTop from "../../../assets/images/card-top.svg";
import BottomImg from "../../../assets/images/card-bottom.svg";
import { Link } from "react-router-dom";
import {
  CardBody,
  CardBottomImg,
  CardDesc,
  CardTitle,
  CardTopImg,
  CatCard,
} from "./Category.styled";
import { BASE_URL } from "../../../API/api";
export const CategoryBook = ({ obj }) => {
  const { image, first_name, last_name, date_of_birth, date_of_death } = obj;
  return (
    <Link className="col-md-3 text-decoration-none" to="/">
      <CatCard>
        <img height="224px" width="295px" src={BASE_URL + "/" + image} alt="" />
        <CardBody>
          <CardTopImg src={CardTop} alt="" />
          <CardTitle>
            {first_name} {last_name}{" "}
          </CardTitle>
          <CardDesc>
            {date_of_birth} - {date_of_death}
          </CardDesc>
          <CardBottomImg src={BottomImg} alt="bottom image" />
        </CardBody>
      </CatCard>
    </Link>
  );
};
