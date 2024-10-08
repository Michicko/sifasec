import Header from "../Components/Layout/Header";
import HeaderBottom from "../Components/Layout/HeaderBottom";
import HeaderTop from "../Components/Layout/HeaderTop";
import Services from "../Components/Services/Services";
import Industries from "../Components/Industries/Industries";
import Ca from "../Components/Ca/Ca";
import Button from "../Components/Button";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Sifa Cyber Security services | Leading Managed Detection and Response
        </title>
        <link rel="canonical" href="http://sifasec.com" />
        <meta
          name="description"
          content="Sifa security services help innovators take on tomorrow's challenge securely with our cutting-edge technology and comprehensive cybersecurity solutions"
        />
        <meta
          name="keywords"
          content="sifa security, sifasec, sifa sec, cybersecurity consulting, cloud security consulting, cyber security consultant, cloud security consulting services, cybersecurity companies near me, most popular cybersecurity companies, cybersecurity, cyber risk, cybersecurity advisor, cybersecurity risk assessment, cyber security and risk management, cyber risk consultant, cloud, cloud security, cyber threat and vulnerability management perimeter security internet of things iot security infosec gap analysis"
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Sifa security services help innovators take on tomorrow's challenge securely with our cutting-edge technology and comprehensive cybersecurity solutions"
        />
        <meta property="og:site_name" content="Sifasec.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://sifasec.com/" />
        <meta property="og:image" content={"/images/logo-icon-with-bg.jpeg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sifasec" />
        <meta name="twitter:image" content={"/images/logo-icon-with-bg.jpeg"} />
      </Helmet>
      <Header>
        <HeaderTop>
          <h1>Cybersecurity for Innovators of the 21st Century</h1>
          <p>
            Take on tomorrow&apos;s challenge securely with our cutting-edge and
            comprehensive cybersecurity solutions.
          </p>
          <Button text={"Get started"} url={"/contact"} />
        </HeaderTop>
        <HeaderBottom>
          <img
            src="/images/header-img.jpg"
            alt="sifasec team working"
            className="header-img"
            data-attributes="image by Sigmund on unspash https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM"
          />
        </HeaderBottom>
      </Header>
      <section className="section">
        <h2 className="secondary-heading">Platform-enabled services</h2>
        <Services />
      </section>

      <section className="section section-industry">
        <div className="top">
          <h3 className="light">
            We deliver a diverse range of state of the art solutions across
            industries
          </h3>
          <p>
            Every company and every industry is different. Regulations and
            compliance requirements vary. Threat actors might have special
            tactics depending on the company type
          </p>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <Industries />
        </div>
      </section>
      <Ca />
    </>
  );
}
