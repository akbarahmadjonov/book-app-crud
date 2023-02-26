import { Route, Routes } from "react-router-dom";
import { PrivateHomePage } from "../pages/Private/PrivateHomePage/PrivateHomePage";
import { PrivateHomeBook } from "../pages/Private/PrivateHomeBook/PrivateHomeBook";
import { TemuriylarBook } from "../components/BookCategory/Temuriylar";
import { JadidBook } from "../components/BookCategory/Jadid";
import { SovetBook } from "../components/BookCategory/Sovet";
import { MustaqillikBook } from "../components/BookCategory/Mustaqillik";
import { Temuriylar } from "./Private/MainCategory/Temuriylar";
import { Jadid } from "./Private/MainCategory/Jadid";
import { Sovet } from "./Private/MainCategory/Sovet";
import { Mustaqillik } from "./Private/MainCategory/Mustaqillik";
import { MainCategory } from "./Private/MainCategory/MainCategory";
import { AddBook } from "./Private/AddBook/AddBook";
import { AddAuthor } from "./Private/AddAuthor/AddAuthor";
import { ToastContainer } from "react-toastify";
import { MainProfile } from "./Private/Profile/MainProfile/MainProfile";
import { Security } from "./Private/Profile/Security/Security";
import { Settings } from "./Private/Profile/Settings/Settings";
import { Profile } from "./Private/Profile/Profile";
import { AuthorSingle } from "./Private/AuthorSingle/AuthorSingle";
import { BookSingle } from "./Private/BookSingle/BookSingle";

export const Private = () => {
  return (
    <>
      <Routes>
        <Route path="/privatebook" element={<PrivateHomeBook />}>
          <Route path="/privatebook" element={<TemuriylarBook />} />
          <Route path="temuriylar" element={<TemuriylarBook />} />
          <Route path="sovetlar" element={<SovetBook />} />
          <Route path="jadidlar" element={<JadidBook />} />
          <Route path="mustaqillik" element={<MustaqillikBook />} />
          {/* Author Single page */}
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addauthor" element={<AddAuthor />} />

        {/* Author Single page */}
        <Route path="/author/:id" element={<AuthorSingle />} />
        <Route path="/book/:id" element={<BookSingle />} />

        <Route path="/" element={<MainCategory />}>
          <Route index path="/" element={<Temuriylar />} />
          <Route index path="temuriylar" element={<Temuriylar />} />
          <Route path="jadid" element={<Jadid />} />
          <Route path="sovet" element={<Sovet />} />
          <Route path="mustaqillik" element={<Mustaqillik />} />
        </Route>

        <Route path="/" element={<Profile />}>
          <Route index path="/profile" element={<MainProfile />} />
          <Route path="/mainprofile" element={<MainProfile />} />
          <Route path="/security" element={<Security />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <ToastContainer />
      {/* Add links here */}
    </>
  );
};
