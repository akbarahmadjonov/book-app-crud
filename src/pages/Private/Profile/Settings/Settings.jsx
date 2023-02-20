import {
  ButtonSubmit,
  ButtonWrapper,
  Form,
  FormTitle,
  FormWrapper,
  Label,
  Options,
  Select,
  ThemeInput,
  ThemeLabel,
  Thumb,
} from "./Settings.styled";

export const Settings = () => {
  return (
    <Thumb>
      <FormWrapper className="col-6">
        <FormTitle>Settings</FormTitle>
        <Form>
          <Label htmlFor="firstname">Language</Label>
          <Select className="form-control">
            <Options value="english">English</Options>
            <Options value="uz">UZ</Options>
          </Select>
          <Label htmlFor="btn">Theme</Label>
          <ThemeInput className="theme" id="btn" type="checkbox" />
          <ThemeLabel htmlFor="btn" className="cont"></ThemeLabel>
          <ButtonWrapper>
            <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Thumb>
  );
};
