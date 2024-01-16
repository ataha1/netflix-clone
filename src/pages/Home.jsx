import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";

export default function Home() {
  return (
    <div>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address"></OptForm.Input>
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}
