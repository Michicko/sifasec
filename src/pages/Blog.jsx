import React from "react";
import Header from "../Components/Layout/Header";
import HeaderTop from "../Components/Layout/HeaderTop";
import Button from "../Components/Button";
import HeaderBottom from "../Components/Layout/HeaderBottom";

export default function Blog() {
  return (
    <>
      <Header>
        <HeaderTop>
          <h1>Industry Expertise and Extensive Experience</h1>
          <p>
            At Sifa Security, we&apos;re dedicated to providing business aligned
            cyber security consulting and managed services across diverse
            industries
          </p>
          <Button text={"Get a quote"} />
        </HeaderTop>
        <HeaderBottom>
          <img
            src="/images/about-bg.jpg"
            alt="sifasec team working"
            className="header-img"
            data-attributes="Photo by Alex Kotliarskyi on https://unsplash.com/photos/people-doing-office-works-QBpZGqEMsKg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          />
        </HeaderBottom>
      </Header>
    </>
  );
}
