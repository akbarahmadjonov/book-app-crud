import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonSubmit,
  ButtonWrapper,
  FormTitle,
  FormWrapper,
  Input,
  InputFile,
  InputParagraph,
  Label,
  Thumb,
  UploadWrapper,
  UserImage,
} from "./MainProfile.styled";
import UserImg from "../../../../assets/images/image-not-found-icon.svg";
import { setUser } from "../../../../components/redux/user/userActions";
import { BASE_URL } from "../../../../API/api";

export const MainProfile = () => {
  // GET user
  const [validUser, getValidUser] = useState([]);

  // Img state
  const [img, setImage] = useState({ img: "", objImg: "" });
  // Set token
  const dispatch = useDispatch();
  // Get user
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user);
  // GET user
  useEffect(() => {
    fetch("http://localhost:5000/user/me", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          getValidUser(data);
          dispatch(setUser(data));
        }
      });
  }, []);

  console.log(user);

  const getImg = (evt) => {
    setImage({
      img: evt.currentTarget.files[0],
      objImg: URL.createObjectURL(evt.target.files[0]),
    });
  };

  // Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();

  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is a required field!"),
    last_name: Yup.string().required("Last name is a required field!"),
    phone: Yup.string().required("Phone name is a required field!"),
    image: Yup.string(),
  });

  // Submit form
  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("first_name", firstNameRef.current.value);
    formData.append("last_name", lastNameRef.current.value);
    formData.append("phone", phoneRef.current.value);
    formData.append("image", img.img);

    fetch("http://localhost:5000/user/account", {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("Your profile updated successfully");
        } else if (!data) {
          toast.warning(
            "Your profile was not updated, check your internet connection"
          );
        }
      })
      .catch((err) => console.log(err));
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <>
      <Thumb>
        <UploadWrapper className="col-6">
          <InputFile onChange={(evt) => getImg(evt)} type="file" />
          <UserImage
            src={img.objImg || BASE_URL + "/" + user.image || UserImg}
          />
        </UploadWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <FormWrapper className="col-6">
                <FormTitle>My profile</FormTitle>
                <Form>
                  <Label htmlFor="firstname">
                    First Name
                    {validUser ? (
                      <Input
                        ref={firstNameRef}
                        type="text"
                        id="firstname"
                        name="first_name"
                        placeholder={`Your current First name: ${validUser.first_name}`}
                        value={props.values.first_name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    ) : (
                      ""
                    )}
                    {props.errors.first_name && props.touched.first_name && (
                      <InputParagraph>{props.errors.first_name}</InputParagraph>
                    )}
                  </Label>
                  <Label htmlFor="lastname">
                    Last Name
                    {validUser ? (
                      <Input
                        ref={lastNameRef}
                        type="text"
                        id="lastname"
                        name="last_name"
                        placeholder={`Your current Last name: ${validUser.last_name}`}
                        value={props.values.last_name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    ) : (
                      ""
                    )}
                    {props.errors.last_name && props.touched.last_name && (
                      <InputParagraph>{props.errors.last_name}</InputParagraph>
                    )}
                  </Label>
                  <Label htmlFor="number">
                    Phone number
                    {validUser ? (
                      <Input
                        ref={phoneRef}
                        type="number"
                        id="number"
                        name="phone"
                        placeholder={`Your current Phone: ${validUser.phone}`}
                        value={props.values.phone}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                    ) : (
                      ""
                    )}
                    {props.errors.phone && props.touched.phone && (
                      <InputParagraph>{props.errors.phone}</InputParagraph>
                    )}
                  </Label>
                  <ButtonWrapper>
                    <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
                  </ButtonWrapper>
                </Form>
              </FormWrapper>
            );
          }}
        </Formik>
      </Thumb>
    </>
  );
};
