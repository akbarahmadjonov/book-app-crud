import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
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

export const AddAuthor = () => {
  const [img, setImg] = useState({ img: "", objImg: "" });
  const [genre, setGenre] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef();
  const dateOfDeathRef = useRef();
  const countryRef = useRef();
  const genreRef = useRef();
  const areaRef = useRef();

  // Usenavigate
  const navigate = useNavigate();

  const token = useSelector((state) => state.token.token);

  const initialValues = {
    first_name: "",
    last_name: "",
    date_of_birth: 1950,
    date_of_death: 2019,
    country: "",
    genre: 1,
    area: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is a required field!"),
    last_name: Yup.string().required("Last name is a required field!"),
    date_of_birth: Yup.string().required("Date of birth is a required field!"),
    date_of_death: Yup.string().required("Date of death is a required field!"),
    country: Yup.string().required("Country is a required field!"),
    genre: Yup.number().required("Genre is a required field!"),
    bio: Yup.string().required("Area is a required field!"),
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
    formData.append("first_name", firstNameRef.current.value);
    formData.append("last_name", lastNameRef.current.value);
    formData.append("date_of_birth", dateOfBirthRef.current.value);
    formData.append("date_of_death", dateOfDeathRef.current.value);
    formData.append("country", countryRef.current.value);
    formData.append("genre_id", genreRef.current.value);
    formData.append("bio", areaRef.current.value);
    formData.append("image", img.img);
    console.log(token);
    console.log(formData);
    fetch("http://localhost:5000/author", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("You have successfully added Author");
        }
      })
      .catch((err) => console.log(err));
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dateOfBirthRef.current.value = "";
    dateOfDeathRef.current.value = "";
    countryRef.current.value = "";
    genreRef.current.value = "";
    areaRef.current.value = "";
  };

  // Get genres

  useEffect(() => {
    fetch("http://localhost:5000/genre", {
      method: "GET",
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setGenre(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImgDiv>
          <label htmlFor="">
            <InputFile
              onChange={(evt) => getImg(evt)}
              type="file"
              id="img"
              name="file"
            />
            <UploadImg src={img.objImg} width="200" height="200" />
          </label>
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
                  <FormTitle>Add author</FormTitle>
                  <InputFields>
                    <Input
                      type="text"
                      ref={firstNameRef}
                      name="first_name"
                      placeholder="First name"
                      value={props.values.first_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.first_name && props.touched.first_name && (
                      <InputParagraph>{props.errors.first_name}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="text"
                      ref={lastNameRef}
                      name="last_name"
                      placeholder="Last name"
                      value={props.values.last_name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.last_name && props.touched.last_name && (
                      <InputParagraph>{props.errors.last_name}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="number"
                      ref={dateOfBirthRef}
                      name="date_of_birth"
                      placeholder="Date of birth"
                      value={props.values.date_of_birth}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.date_of_birth &&
                      props.touched.date_of_birth && (
                        <InputParagraph>
                          {props.errors.date_of_birth}
                        </InputParagraph>
                      )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="number"
                      ref={dateOfDeathRef}
                      name="date_of_birth"
                      placeholder="Date of death"
                      value={props.values.date_of_death}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.date_of_death &&
                      props.touched.date_of_death && (
                        <InputParagraph>
                          {props.errors.date_of_death}
                        </InputParagraph>
                      )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="text"
                      ref={countryRef}
                      name="country"
                      placeholder="Country"
                      value={props.values.country}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.country && props.touched.country && (
                      <InputParagraph>{props.errors.country}</InputParagraph>
                    )}
                  </InputFields>
                  <FormSelect
                    className="w-50"
                    ref={genreRef}
                    name="genre_id"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  >
                    <FormOption disabled>Genres</FormOption>
                    {genre.map((genre) => (
                      <FormOption value={genre.id}>{genre.name}</FormOption>
                    ))}
                  </FormSelect>
                  {props.errors.genre && props.touched.genre && (
                    <InputParagraph>{props.errors.genre}</InputParagraph>
                  )}
                  <InputFields>
                    <FormTextarea
                      ref={areaRef}
                      placeholder="Bio"
                      name="bio"
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
