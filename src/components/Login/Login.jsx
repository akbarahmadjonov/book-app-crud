import SigninBg from "../../assets/images/Signin-bg.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
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
} from "./Login.styled";
import { GlobalStyle } from "../../components/Styles/GlobalStyled";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../API/api";
import { setToken } from "../redux/token/tokenActions";
import { setUser } from "../redux/user/userActions";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is a required field!"),
    password: Yup.string().required("Password is a required field!"),
  });

  const userLogin = (user) => {
    axios
      .post(BASE_URL + "/user/login", user)
      .then((data) => {
        if (data.status === 201) {
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
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    userLogin(values);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImgDiv>
          <BgImg src={SigninBg} alt="Signup bg" />
        </ImgDiv>
        <FormDiv>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <FormTitle>Sign in</FormTitle>
                  <FormText>
                    Don't you have an account? <Link to="/">Sign up</Link>
                  </FormText>
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
