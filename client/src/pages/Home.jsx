import Header from "../Components/Layout/Header";
import HeaderBottom from "../Components/Layout/HeaderBottom";
import HeaderTop from "../Components/Layout/HeaderTop";
import Services from "../Components/Services/Services";
import Industries from "../Components/Industries/Industries";
import Ca from "../Components/Ca/Ca";
import Button from "../Components/Button";

export default function Home() {
  return (
    <>
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
