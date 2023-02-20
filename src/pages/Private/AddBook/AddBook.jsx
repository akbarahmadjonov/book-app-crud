import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  BackButton,
  // BgImg,
  FormDiv,
  FormOption,
  // FormOption,
  // FormSelect,
  // FormText,
  FormTextarea,
  FormTitle,
  ImgDiv,
  Input,
  InputFields,
  InputFile,
  InputParagraph,
  SubmitButton,
  UploadImg,
  Wrapper,
} from "../AddAuthor/AddAuthor.styled";
import { GlobalStyle } from "../../../components/Styles/GlobalStyled";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormSelect } from "react-bootstrap";

export const AddBook = () => {
  const [img, setImg] = useState({ img: "", objImg: "" });
  const titleRef = useRef();
  const pagesRef = useRef();
  const yearRef = useRef();
  const priceRef = useRef();
  const genreRef = useRef();
  const authorRef = useRef();
  const areaRef = useRef();

  // Usenavigate
  const navigate = useNavigate();

  const token = useSelector((state) => state.token.token);

  const initialValues = {
    title: "",
    page: "",
    year: 1950,
    price: 20,
    genre_id: "",
    author_id: 1,
    description: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is a required field!"),
    page: Yup.string().required("Page is a required field!"),
    year: Yup.string().required("Year is a required field!"),
    price: Yup.string().required("Price is a required field!"),
    genre_id: Yup.number().required("Genre is a required field!"),
    author_id: Yup.number().required("Author is a required field!"),
    description: Yup.string().required("Area is a required field!"),
    image: Yup.string(),
  });

  const getImg = (evt) => {
    setImg({
      img: evt.currentTarget.files[0],
      objImg: URL.createObjectURL(evt.target.files[0]),
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();

    // const values = {
    //   first_name: firstNameRef.current.value,
    //   last_name: lastNameRef.current.value,
    //   date_of_birth: dateOfBirthRef.current.value,
    //   date_of_death: dateOfDeathRef.current.value,
    //   country: countryRef.current.value,
    //   genre: genreRef.current.value,
    //   area: areaRef.current.value,
    // };
    console.log(img);
    formData.append("title", titleRef.current.value);
    formData.append("page", pagesRef.current.value);
    formData.append("year", yearRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("genre_id", genreRef.current.value);
    formData.append("author_id", authorRef.current.value);
    formData.append("description", areaRef.current.value);
    formData.append("image", img.img);
    console.log(token);
    console.log(formData);
    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("You have successfully added Book");
        }
      })
      .catch((err) => console.log(err));
    titleRef.current.value = "";
    pagesRef.current.value = "";
    yearRef.current.value = "";
    priceRef.current.value = "";
    genreRef.current.value = "";
    authorRef.current.value = "";
    areaRef.current.value = "";
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImgDiv>
          <InputFile
            onChange={(evt) => getImg(evt)}
            type="file"
            id="img"
            name="file"
          />
          <UploadImg src={img.objImg} width="200" height="200" />
        </ImgDiv>
        <FormDiv>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              // console.log(props);
              return (
                <Form>
                  <BackButton onClick={() => navigate(-1)}>
                    Back to Home
                  </BackButton>
                  <FormTitle>Add book</FormTitle>
                  <InputFields>
                    <Input
                      type="text"
                      ref={titleRef}
                      name="title"
                      placeholder="Title"
                      value={props.values.title}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.title && props.touched.title && (
                      <InputParagraph>{props.errors.title}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="number"
                      ref={pagesRef}
                      name="page"
                      placeholder="Pages"
                      value={props.values.page}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.page && props.touched.page && (
                      <InputParagraph>{props.errors.page}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="number"
                      ref={yearRef}
                      name="year"
                      placeholder="Year"
                      value={props.values.year}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.year && props.touched.year && (
                      <InputParagraph>{props.errors.year}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type=""
                      ref={priceRef}
                      name="price"
                      placeholder="Price"
                      value={props.values.price}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.price && props.touched.price && (
                      <InputParagraph>{props.errors.price}</InputParagraph>
                    )}
                  </InputFields>
                  <FormSelect
                    ref={genreRef}
                    className="d-block w-50"
                    name="genre_id"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  >
                    <FormOption disabled>Genre</FormOption>
                    <FormOption value="1">1</FormOption>
                    <FormOption value="2">2</FormOption>
                  </FormSelect>
                  {props.errors.genre && props.touched.genre_id && (
                    <InputParagraph>{props.errors.genre_id}</InputParagraph>
                  )}
                  <FormSelect
                    ref={authorRef}
                    className="d-block w-50"
                    name="author_id"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  >
                    <FormOption disabled>Author</FormOption>
                    <FormOption value="1">1</FormOption>
                    <FormOption value="2">2</FormOption>
                  </FormSelect>
                  {props.errors.author_id && props.touched.author_id && (
                    <InputParagraph>{props.errors.author_id}</InputParagraph>
                  )}
                  <InputFields>
                    <FormTextarea
                      ref={areaRef}
                      placeholder="Bio"
                      name="description"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    ></FormTextarea>
                  </InputFields>
                  <SubmitButton type="submit">Create</SubmitButton>
                </Form>
              );
            }}
          </Formik>
        </FormDiv>
      </Wrapper>
    </>
  );
};
