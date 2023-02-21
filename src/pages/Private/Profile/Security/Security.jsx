import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainProfile } from "../MainProfile/MainProfile";
import { useNavigate } from "react-router-dom";
import {
  BackButton,
  ButtonSubmit,
  ButtonWrapper,
  FormTitle,
  FormWrapper,
  Input,
  InputParagraph,
  Label,
  Thumb,
} from "./Security.styled";
import { useSelector } from "react-redux";

export const Security = () => {
  const navigate = useNavigate();
  // Token
  const token = useSelector((state) => state.token.token);

  const emailRef = useRef();
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();

  const initialValues = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is a required field!"),
    currentPassword: Yup.string().required(
      "Current password is a required field!"
    ),
    newPassword: Yup.string().required("New password is a required field!"),
  });

  const handleSubmit = () => {
    fetch("http://localhost:5000/user/security", {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        currentPassword: currentPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Thumb>
      <FormWrapper className="col-6">
        <BackButton onClick={() => navigate(-1)}>Back to Home</BackButton>
        <FormTitle>Change Or Recover Your Password:</FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form>
                <Label htmlFor="email">
                  Email
                  <Input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="admin@mail.ru"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.email && props.touched.email && (
                    <InputParagraph>{props.errors.email}</InputParagraph>
                  )}
                </Label>
                <Label htmlFor="currentpassword">
                  Current Password
                  <Input
                    ref={currentPasswordRef}
                    type="password"
                    id="currentpassword"
                    name="currentPassword"
                    placeholder="1234"
                    value={props.values.currentPassword}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.currentPassword &&
                    props.touched.currentPassword && (
                      <InputParagraph>
                        {props.errors.currentPassword}
                      </InputParagraph>
                    )}
                </Label>
                <Label htmlFor="newpassword">
                  New Password
                  <Input
                    ref={newPasswordRef}
                    type="password"
                    id="newpassword"
                    name="newPassword"
                    placeholder="1234"
                    value={props.values.newPassword}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.newPassword && props.touched.newPassword && (
                    <InputParagraph>{props.errors.newPassword}</InputParagraph>
                  )}
                </Label>

                <ButtonWrapper>
                  <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
                </ButtonWrapper>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </Thumb>
  );
};
