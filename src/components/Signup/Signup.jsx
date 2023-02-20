import SignupBg from "../../assets/images/Signup-bg.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { api, BASE_URL } from "../../API/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BgImg,
  FormDiv,
  FormText,
  FormTitle,
  ImgDiv,
  Input,
  InputFields,
  InputParagraph,
  SubmitButton,
  Wrapper,
} from "./Signup.styled";
import { GlobalStyle } from "../../components/Styles/GlobalStyled";
import axios from "axios";
import { Link } from "react-router-dom";
import { setToken } from "../redux/token/tokenActions";
import { setUser } from "../redux/user/userActions";

export const Signup = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // DISPATCH
  const dispatch = useDispatch();
  // UseNavigate
  const navigate = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is a required field!"),
    last_name: Yup.string().required("Last name is a required field!"),
    phone: Yup.string().required("Phone is a required field!"),
    email: Yup.string().email().required("Email is a required field!"),
    password: Yup.string().required("Password is a required field!"),
  });

  const userRegister = (user) => {
    axios
      .post(BASE_URL + "/user/register", user)
      .then((data) => {
        if (data.status === 201) {
          console.log(data);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("user", data.data.user);
          dispatch(setToken(data.data.token));
          dispatch(setUser(data.data.user));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const values = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    userRegister(values);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImgDiv>
          <BgImg src={SignupBg} alt="Signup bg" />
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
                  <FormTitle>Sign up</FormTitle>
                  <FormText>
                    Already have an account? <Link to="/login">Sign in</Link>
                  </FormText>
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
                      type="text"
                      ref={phoneRef}
                      name="phone"
                      placeholder="Phone"
                      value={props.values.phone}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.phone && props.touched.phone && (
                      <InputParagraph>{props.errors.phone}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="email"
                      ref={emailRef}
                      name="email"
                      placeholder="Email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.email && props.touched.email && (
                      <InputParagraph>{props.errors.email}</InputParagraph>
                    )}
                  </InputFields>

                  <InputFields>
                    <Input
                      type="password"
                      ref={passwordRef}
                      name="password"
                      placeholder="Password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.password && props.touched.password && (
                      <InputParagraph>{props.errors.password}</InputParagraph>
                    )}
                  </InputFields>
                  <SubmitButton type="submit">Next step</SubmitButton>
                </Form>
              );
            }}
          </Formik>
        </FormDiv>
      </Wrapper>
    </>
  );
};
