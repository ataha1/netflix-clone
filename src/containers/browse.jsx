import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../components/context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { useState } from "react";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Taha",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
