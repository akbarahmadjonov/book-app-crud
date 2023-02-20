import { Route, Routes } from "react-router-dom";
import { PrivateHomePage } from "../pages/Private/PrivateHomePage/PrivateHomePage";
import { PrivateHomeBook } from "../pages/Private/PrivateHomeBook/PrivateHomeBook";
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

export const Private = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<PrivateHomePage />} /> */}
        <Route path="/privatebook" element={<PrivateHomeBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addauthor" element={<AddAuthor />} />

        <Route path="/" element={<MainCategory />}>
          <Route path="temuriylar" element={<Temuriylar />} />
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
    </>
  );
};
