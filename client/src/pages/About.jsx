import Header from "../Components/Layout/Header";
import HeaderBottom from "../Components/Layout/HeaderBottom";
import HeaderTop from "../Components/Layout/HeaderTop";
import Button from "../Components/Button";
import { experiences } from "../data";
import Service from "../Components/Services/Service";
import { v4 as uuid } from "uuid";
import { Helmet } from "react-helmet-async";
import Page from "../Components/Page";

export default function About() {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Sifa</title>
        <meta property="og:title" content="About Sifa sec" />
        <meta
          name="description"
          content="At SIFA Security, we specialize in automated security solutions that help you stay protected against cyber threats, data breaches, and other security risks. Our team of cybersecurity experts leverage the latest technologies and tools to automate security processes, reduce risks, and increase the efficiency of your security operations."
        />
        <meta
          property="og:description"
          content="At SIFA Security, we specialize in automated security solutions that help you stay protected against cyber threats, data breaches, and other security risks. Our team of cybersecurity experts leverage the latest technologies and tools to automate security processes, reduce risks, and increase the efficiency of your security operations."
        />
        <meta
          name="keywords"
          content="cybersecurity companies, top cybersecurity companies, cybersecurity company, best cybersecurity companies, cybersecurity company near me, best cybersecurity company near me"
        />
        <meta property="og:site_name" content="Sifasec.com" />
        <meta property="og:type" content="article" />
        <meta name="msapplication-TileColor" content="#103654" />
        <meta
          name="msapplication-config"
          content={"/images/logo-icon-with-bg.jpeg"}
        />
        <meta property="og:url" content={`http://sifasec.com/about/`} />
        <meta property="og:image" content={"/images/logo-icon-with-bg.jpeg"} />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sifasec" />
        <meta name="twitter:image" content={"/images/logo-icon-with-bg.jpeg"} />
      </Helmet>
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
      <section className="section">
        <h2>Enhancing Experience with Latest Technology</h2>
        <div className="texts">
          <p>
            We understand that cybersecurity is a a top priority for businesses
            of all sizes and that&apos;s why we&apos;re committed to providing
            you with the best possible protection against cyber threats.
          </p>
          <p>
            Our team of cybersecurity professionals is dedicated to working
            closely with you to understand your specific needs and develop
            customized solutions that meet those needs. We believe in a
            collaborative approach to cybersecurity, where our clients are
            active participants in the development and implementation of their
            security solution.
          </p>
        </div>
        <div className="experiences">
          {experiences.map((experience) => {
            return <Service service={experience} key={uuid()} />;
          })}
        </div>
      </section>
      <section className="section min">
        <div className="top">
          <h3>Helping professional service firms reach their potential</h3>
          <p>
            We&apos;re committed to helping you build security into the heart of
            of your organization. Whether you&apos;re looking for a
            comprehensive security platform, an assessment to better understand
            your security posture, or something in between, we&apos;ve got your
            back.
          </p>
          <Button text={"Talk with Sifasec"} url={"/contact"} />
        </div>
      </section>
    </Page>
  );
}
